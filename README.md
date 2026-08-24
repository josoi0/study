# 日语炼金工房

面向日语教师的个性化练习生成平台，分为两条备考路线：

- **日语高考**：基于人教版高中日语大纲，支持完形填空、阅读理解、语言运用与作文练习。
- **JLPT**：以《大家的日本语》和《标准日本语》为基础，按 N5～N1 等级生成文字词汇、语法和阅读练习。

平台支持学生卷、教师答案与解析分开打印，并针对阅读题提供文章翻译和选项解析，作文题提供参考例文与精彩句子。

## 本地运行

需要 Node.js 22.13.0 或更高版本。

```bash
npm install
npm run dev
```

构建与测试：

```bash
npm run build
npm test
```

## 技术栈

Next.js、React、TypeScript、vinext、Cloudflare Workers。

## 在线版本

[打开日语炼金工房](https://nihongo-practice-kobo.changzuowei0.chatgpt.site/)
