import withMDXPlugin from "@next/mdx"
import recmaNextjsStaticProps from "recma-nextjs-static-props"
import { readFile, writeFile } from "fs/promises"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"

import recmaAddMetadata from "./scripts/recmaAddMetadata.mjs"
import recmaAddTOC from "./scripts/recmaAddTOC.mjs"
import {
  rehypeReplaceDictionaryWords,
  rehypeHighlightDictionaryWords,
} from "./scripts/rehypeHighlightDictionaryWords.mjs"

function getAllDictionaryWords(text) {
  const allMatches = text.match(/.+?\n\:.+/g) || []
  return allMatches.map((d) => {
    const t = d.split(": ")
    const term = t[0].replaceAll(/\n/g, "")
    const definition = t[1].trim()
    return { term, definition }
  })
}

const dictionaryFile = await readFile("./pages/dictionary.mdx", "utf8")
const allDictionaryWords = getAllDictionaryWords(dictionaryFile)

await writeFile(
  "./public/dictionary.json",
  JSON.stringify(allDictionaryWords),
  "utf8"
)

const withMDX = withMDXPlugin({
  extension: /\.(md|mdx)$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: "metaData" }],
    ],
    rehypePlugins: [
      rehypeReplaceDictionaryWords,
      [
        rehypeHighlightDictionaryWords,
        {
          words: allDictionaryWords.map((d) => d.term),
        },
      ],
    ],
    recmaPlugins: [
      recmaAddMetadata,
      recmaAddTOC,
      [recmaNextjsStaticProps, { include: ["metaData"] }],
    ],
  },
})

const plugins = [withMDX]

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  trailingSlash: true,
  env: {
    MAILCHIMP_ADDRESS: process.env.MAILCHIMP_ADDRESS || "",
    MAILCHIMP_TIMEOUT: 3500,
  },
  basePath: process.env.BASE_PATH === "/" ? "" : process.env.BASE_PATH || "",
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH === "/" ? "" : process.env.BASE_PATH,
    shareUrl: process.env.SHARE_URL,
  },
}

export default function () {
  return plugins.reduce((acc, plugin) => plugin(acc), nextConfig)
}
