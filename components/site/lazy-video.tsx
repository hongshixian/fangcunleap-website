"use client"

import { useEffect, useRef, type CSSProperties } from "react"

// 与原先各处 <video> 完全一致的双向渐变遮罩样式
const MASK_STYLE: CSSProperties = {
  maskImage:
    "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%), linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
  maskComposite: "intersect",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%), linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
  WebkitMaskComposite: "source-in",
} as CSSProperties

interface LazyVideoProps {
  src: string
  className?: string
  style?: CSSProperties
}

// 由视频路径推导封面图路径：/videos/x.mp4 -> /videos/posters/x.png
function posterFor(src: string) {
  return src.replace("/videos/", "/videos/posters/").replace(/\.mp4$/, ".png")
}

/**
 * 懒加载视频 + 封面图：
 * - 始终带 poster 首帧封面，视频未播放/被拦截时也不会空白。
 * - 桌面端：滚动进入视口才下载并播放，离开即暂停。
 * - 移动端(触屏)：只显示封面静态图，不加载/播放视频——避免手机自动播放被拦截导致空白，
 *   以及多路视频解码在手机 GPU 上造成卡顿。
 */
export function LazyVideo({ src, className, style }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // 触屏/移动设备：只显示封面，不加载播放视频
    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia?.("(hover: none) and (pointer: coarse)").matches
    if (isTouch) return

    // 不支持 IntersectionObserver 的老浏览器：直接播放兜底
    if (typeof IntersectionObserver === "undefined") {
      el.play?.().catch(() => {})
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // preload="none" 下，play() 才会触发下载+播放
          el.play?.().catch(() => {})
        } else {
          el.pause?.()
        }
      },
      { rootMargin: "200px" }, // 略微提前加载，滚到时已就绪
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      loop
      muted
      playsInline
      preload="none"
      poster={posterFor(src)}
      disablePictureInPicture
      disableRemotePlayback
      onContextMenu={(e) => e.preventDefault()}
      className={className}
      style={style ? { ...MASK_STYLE, ...style } : MASK_STYLE}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
