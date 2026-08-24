import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nihongo-practice-kobo.changzuowei0.chatgpt.site"),
  title: "日语炼金工房｜高考日语与JLPT双轨练习生成器",
  description: "按人教版高考日语大纲，以及大家的日本语、标准日本语教材体系生成针对性备考练习。",
  openGraph: {
    title: "日语备考双轨平台",
    description: "高考日语 · JLPT",
    images: [{ url: "/og.png", width: 1536, height: 1024 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
