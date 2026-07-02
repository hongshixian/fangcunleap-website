"use client"

import { useEffect, useRef } from "react"

/**
 * Procedurally renders the hero background as a WebGL2 mesh gradient,
 * replacing the previous static `/hero-1.png` artwork. Ported from the
 * validated sandflow demo (~/git/sandflow) which reproduces the same
 * purple sand-like surface as the original image.
 *
 * The canvas sits behind the hero content; a transparent clear color lets
 * the section's own background show through before WebGL is ready, and a
 * CSS opacity transition fades the canvas in once the first frame draws.
 */

const CONFIG = Object.freeze({
  colors: ["#00000e", "#2d0055", "#9222d8", "#f06bff"],
  positions: 42,
  waveX: 0.45,
  waveXShift: 0,
  waveY: 1,
  waveYShift: 0,
  mixing: 0,
  grainMixer: 0.37,
  grainOverlay: 0.78,
  rotation: 270,
  minPixelRatio: 2,
  maxPixelCount: 8_294_400,
})

const vertexSource = `#version 300 es
  precision mediump float;

  layout(location = 0) in vec2 a_position;
  uniform vec2 u_resolution;
  uniform float u_rotation;
  out vec2 v_objectUV;

  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);

    float squareSide = min(u_resolution.x, u_resolution.y);
    vec2 objectWorldScale = u_resolution / squareSide;
    v_objectUV = a_position * 0.5 * objectWorldScale;
    float angle = radians(u_rotation);
    v_objectUV = mat2(cos(angle), sin(angle), -sin(angle), cos(angle)) * v_objectUV;
  }
`

const fragmentSource = `#version 300 es
  precision mediump float;

  #define TWO_PI 6.28318530718

  uniform vec4 u_colors[4];
  uniform float u_positions;
  uniform float u_waveX;
  uniform float u_waveXShift;
  uniform float u_waveY;
  uniform float u_waveYShift;
  uniform float u_mixing;
  uniform float u_grainMixer;
  uniform float u_grainOverlay;

  in vec2 v_objectUV;
  out vec4 fragColor;

  vec2 rotate(vec2 uv, float radians) {
    return mat2(cos(radians), sin(radians), -sin(radians), cos(radians)) * uv;
  }

  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }

  float valueNoise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  vec2 getPosition(int index, float seed) {
    float i = float(index);
    float a = i * 0.37;
    float b = 0.6 + mod(i, 3.0) * 0.3;
    float c = 0.8 + mod(i + 1.0, 4.0) * 0.25;
    return 0.5 + 0.5 * vec2(sin(seed * b + a), cos(seed * c + a * 1.5));
  }

  void main() {
    vec2 uv = v_objectUV + 0.5;
    vec2 grainUV = uv * 1000.0;

    float grain = valueNoise(grainUV);
    float mixerGrain = 0.4 * u_grainMixer * (grain - 0.5);

    float radius = smoothstep(0.0, 1.0, length(uv - 0.5));
    float center = 1.0 - radius;

    for (float i = 1.0; i <= 2.0; i++) {
      uv.x += u_waveX * center / i
        * cos(TWO_PI * u_waveXShift + i * 2.0 * smoothstep(0.0, 1.0, uv.y));
      uv.y += u_waveY * center / i
        * cos(TWO_PI * u_waveYShift + i * 2.0 * smoothstep(0.0, 1.0, uv.x));
    }

    vec3 color = vec3(0.0);
    float opacity = 0.0;
    float totalWeight = 0.0;
    float positionSeed = 25.0 + 0.33 * u_positions;

    for (int i = 0; i < 4; i++) {
      vec2 position = getPosition(i, positionSeed) + mixerGrain;
      float distanceToColor = length(uv - position);
      float mixing = pow(u_mixing, 0.7);
      float power = mix(2.0, 1.0, mixing);
      distanceToColor = pow(distanceToColor, power);

      float weight = 1.0 / (distanceToColor + 1e-3);
      float baseSharpness = mix(0.0, 8.0, clamp(weight, 0.0, 1.0));
      float sharpness = mix(baseSharpness, 1.0, mixing);
      weight = pow(weight, sharpness);

      color += u_colors[i].rgb * u_colors[i].a * weight;
      opacity += u_colors[i].a * weight;
      totalWeight += weight;
    }

    color /= max(1e-4, totalWeight);
    opacity /= max(1e-4, totalWeight);

    float overlay = valueNoise(rotate(grainUV, 1.0) + vec2(3.0));
    overlay = mix(overlay, valueNoise(rotate(grainUV, 2.0) + vec2(-1.0)), 0.5);
    overlay = pow(overlay, 1.3);

    float signedOverlay = overlay * 2.0 - 1.0;
    vec3 overlayColor = vec3(step(0.0, signedOverlay));
    float overlayStrength = u_grainOverlay * abs(signedOverlay);
    overlayStrength = pow(overlayStrength, 0.8);
    color = mix(color, overlayColor, 0.35 * overlayStrength);

    opacity = clamp(opacity + 0.5 * overlayStrength, 0.0, 1.0);
    fragColor = vec4(color, opacity);
  }
`

function toRgba(hex: string): [number, number, number, number] {
  const value = Number.parseInt(hex.slice(1), 16)
  return [
    ((value >> 16) & 255) / 255,
    ((value >> 8) & 255) / 255,
    (value & 255) / 255,
    1,
  ]
}

export function MeshGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: true,
      powerPreference: "high-performance",
    })

    if (!gl) return

    function compile(type: number, source: string) {
      const shader = gl!.createShader(type)
      if (!shader) throw new Error("Unable to create shader")
      gl!.shaderSource(shader, source)
      gl!.compileShader(shader)
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        const message = gl!.getShaderInfoLog(shader)
        gl!.deleteShader(shader)
        throw new Error(message ?? "Shader compile failed")
      }
      return shader
    }

    let resizeObserver: ResizeObserver | null = null

    try {
      const program = gl.createProgram()
      if (!program) throw new Error("Unable to create program")
      const vertexShader = compile(gl.VERTEX_SHADER, vertexSource)
      const fragmentShader = compile(gl.FRAGMENT_SHADER, fragmentSource)
      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program) ?? "Program link failed")
      }

      gl.useProgram(program)
      gl.clearColor(0, 0, 0, 0)

      const vertices = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, vertices)
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW,
      )
      gl.enableVertexAttribArray(0)
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)

      const uniforms = {
        resolution: gl.getUniformLocation(program, "u_resolution"),
        rotation: gl.getUniformLocation(program, "u_rotation"),
        colors: gl.getUniformLocation(program, "u_colors[0]"),
        positions: gl.getUniformLocation(program, "u_positions"),
        waveX: gl.getUniformLocation(program, "u_waveX"),
        waveXShift: gl.getUniformLocation(program, "u_waveXShift"),
        waveY: gl.getUniformLocation(program, "u_waveY"),
        waveYShift: gl.getUniformLocation(program, "u_waveYShift"),
        mixing: gl.getUniformLocation(program, "u_mixing"),
        grainMixer: gl.getUniformLocation(program, "u_grainMixer"),
        grainOverlay: gl.getUniformLocation(program, "u_grainOverlay"),
      }

      gl.uniform4fv(
        uniforms.colors,
        new Float32Array(CONFIG.colors.flatMap(toRgba)),
      )
      gl.uniform1f(uniforms.rotation, CONFIG.rotation)
      gl.uniform1f(uniforms.positions, CONFIG.positions)
      gl.uniform1f(uniforms.waveX, CONFIG.waveX)
      gl.uniform1f(uniforms.waveXShift, CONFIG.waveXShift)
      gl.uniform1f(uniforms.waveY, CONFIG.waveY)
      gl.uniform1f(uniforms.waveYShift, CONFIG.waveYShift)
      gl.uniform1f(uniforms.mixing, CONFIG.mixing)
      gl.uniform1f(uniforms.grainMixer, CONFIG.grainMixer)
      gl.uniform1f(uniforms.grainOverlay, CONFIG.grainOverlay)

      function render() {
        if (!canvas || !gl) return
        const bounds = canvas.getBoundingClientRect()
        const requestedDpr = Math.max(
          window.devicePixelRatio || 1,
          CONFIG.minPixelRatio,
        )
        const requestedPixels =
          bounds.width * requestedDpr * (bounds.height * requestedDpr)
        const pixelBudgetScale = Math.min(
          1,
          Math.sqrt(CONFIG.maxPixelCount / requestedPixels),
        )
        const renderScale = requestedDpr * pixelBudgetScale
        const width = Math.max(1, Math.round(bounds.width * renderScale))
        const height = Math.max(1, Math.round(bounds.height * renderScale))

        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width
          canvas.height = height
        }

        gl.viewport(0, 0, width, height)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.uniform2f(uniforms.resolution, width, height)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
        canvas.dataset.ready = "true"
      }

      resizeObserver = new ResizeObserver(render)
      resizeObserver.observe(canvas)
      render()
    } catch (error) {
      console.error("Mesh gradient initialization failed:", error)
    }

    return () => {
      resizeObserver?.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 block h-full w-full opacity-0 transition-opacity duration-300 ease-out data-[ready=true]:opacity-100 motion-reduce:transition-none"
    />
  )
}
