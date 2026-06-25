import Image from "next/image"
import { Logo } from "./logo"

const qrCodes = [
  { src: "/site/qr-wechat.jpg", label: "微信公众号" },
  { src: "/site/qr-channels.png", label: "视频号" },
  { src: "/site/qr-xhs.jpeg", label: "小红书" },
]

const footerCols = [
  {
    title: "产品与服务",
    links: [
      "Agentic Infra 自主式基础设施平台",
      "多元异构基座",
      "大模型训练",
      "大模型推理",
      "企业级智能体",
      "具身智能工具链",
      "Agentic MaaS 大模型服务平台",
    ],
  },
  {
    title: "解决方案",
    links: ["AI 原生企业解决方案", "智能制造行业解决方案", "AIGC 企业解决方案", "智能硬件解决方案"],
  },
  { title: "技术与研究", links: ["核心技术"] },
  { title: "新闻中心", links: ["新闻动态", "媒体报道", "视频报道"] },
  { title: "关于我们", links: ["公司介绍", "团队介绍", "荣誉资质", "联系我们"] },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-[oklch(0.16_0.02_285)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Logo light />
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p>业务咨询：pre-sales@infini-ai.com</p>
              <p>媒体垂询：pr@infini-ai.com</p>
              <p>人力资源：hr@infini-ai.com</p>
            </div>
            <div className="mt-5 text-sm text-white/70">
              <p>联系电话：400-806-6058</p>
            </div>
            <div className="mt-5 space-y-1 text-sm leading-relaxed text-white/70">
              <p>公司地址：上海市徐汇区龙台路 180 号模速空间（总部）</p>
              <p className="pl-[4.5rem] -indent-0 sm:pl-[4.5rem]">北京市海淀区原点大厦 AB 裙楼三层</p>
            </div>
            <div className="mt-6 flex gap-4">
              {qrCodes.map((q) => (
                <div key={q.label} className="flex flex-col items-center gap-2">
                  <div className="size-20 overflow-hidden rounded-lg bg-white p-1">
                    <Image
                      src={q.src}
                      alt={q.label}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-[11px] text-white/60">{q.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {footerCols.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-white">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-xs leading-relaxed text-white/60 transition-colors hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 方寸跃迁 FANGCUN LEAP. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="#" className="hover:text-white">沪 ICP 备 2024070257 号-2</a>
            <a href="#" className="hover:text-white">沪公网安备 31010402336716 号</a>
            <a href="#" className="hover:text-white">隐私政策</a>
            <a href="#" className="hover:text-white">Cookie 政策</a>
            <a href="#" className="hover:text-white">免责声明</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
