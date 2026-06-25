import Image from "next/image"

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/brand-mark.png"
        alt="无问芯穹 logo"
        width={34}
        height={34}
        className="h-8 w-8 object-contain"
        priority
      />
      <div className="flex flex-col leading-none">
        <span
          className={`text-lg font-bold tracking-tight ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          无问芯穹
        </span>
        <span
          className={`text-[10px] font-medium tracking-[0.2em] ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          INFINIGENCE
        </span>
      </div>
    </div>
  )
}
