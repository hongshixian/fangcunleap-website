// Renders the hero mesh-gradient shader off-line in a real WebGL2 context
// (headless Chromium) and saves the exact frame as a static JPEG fallback.
//
// The output is pixel-identical to what the browser draws at runtime for the
// same aspect ratio — only the resolution differs. Regenerate whenever the
// shader or CONFIG in components/site/mesh-gradient-background.tsx changes.
//
// Requires Playwright's Chromium. If not already present:
//   npx playwright install chromium
// Then run:
//   node scripts/hero-fallback/render.mjs
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const here = dirname(fileURLToPath(import.meta.url));
const htmlUrl = pathToFileURL(resolve(here, "render.html")).href;
const outPath = resolve(here, "../../public/hero-fallback");

// 16:9 desktop hero. The shader is aspect-ratio driven, so any 16:9 size
// yields the same composition. 1600x900 is ample for a background that always
// sits behind a darkening overlay and text, and keeps the grainy PNG/JPEG
// (hard to compress) to a reasonable weight.
const WIDTH = 1600;
const HEIGHT = 900;

const browser = await chromium.launch({
  args: [
    "--no-sandbox",
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
    "--ignore-gpu-blocklist",
  ],
});

try {
  const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } });
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));

  await page.goto(htmlUrl, { waitUntil: "load" });

  const glError = await page.evaluate(([w, h]) => window.renderHero(w, h), [WIDTH, HEIGHT]);
  if (glError !== 0) throw new Error(`WebGL error code ${glError}. ${errors.join("; ")}`);

  // Encode the rendered frame with the browser's own JPEG codec. Every browser
  // that lacks WebGL2 still decodes JPEG, and the grainy output compresses no
  // better as WebP, so a single JPEG is the leanest universal fallback.
  const jpeg = await page.evaluate((quality) => {
    const canvas = document.getElementById("c");
    return canvas.toDataURL("image/jpeg", quality).split(",")[1];
  }, 0.85);

  const { writeFileSync } = await import("node:fs");
  writeFileSync(outPath + ".jpg", Buffer.from(jpeg, "base64"));

  console.log(`Wrote hero-fallback.jpg (${WIDTH}x${HEIGHT})`);
  if (errors.length) console.warn("Console warnings:", errors);
} finally {
  await browser.close();
}
