import Image from 'next/image';

interface ImgFigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export function ImgFigure({ src, alt, caption, width = 1200, height = 675 }: ImgFigureProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full overflow-hidden rounded-lg border border-[#E2D9C8] bg-[#FBF7EF]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-[#8A8A80]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
