import Image from "next/image"

/**
 * 站点 Logo（图片版）。
 * - light=false（默认）：直接展示原色 logo，适用于浅色背景。
 * - light=true：用 `brightness(0) invert(1)` 将 logo 的所有不透明像素刷成纯白，
 *   适用于首页顶部透明状态下的深色 hero 背景。
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Image
      src="/images/fangcun_ai_horizontal_logo_transparent.png"
      alt="方寸跃迁 FANGCUN LEAP"
      width={300}
      height={72}
      className={`h-[60px] w-auto object-contain ${light ? "[filter:brightness(0)_invert(1)]" : ""}`}
      priority
    />
  )
}
