interface VideoFigureProps {
  src: string;
  caption?: string;
}

export function VideoFigure({ src, caption }: VideoFigureProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full overflow-hidden rounded-lg border border-[#E2D9C8] bg-[#FBF7EF]">
        <video
          src={src}
          controls
          className="w-full h-auto"
          playsInline
        >
          您的浏览器不支持视频标签。
        </video>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-[#8A8A80]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
