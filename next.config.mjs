import withMDXPlugin from "@next/mdx"
import recmaNextjsStaticProps from "recma-nextjs-static-props"

import addMetadataPlugin from "./scripts/addMetadataPlugin.mjs"
import addTOCPlugin from "./scripts/addTOCPlugin.mjs"

const withMDX = withMDXPlugin({
  extension: /\.(md|mdx)$/,
  options: {
    providerImportSource: "@mdx-js/react",
    recmaPlugins: [
      addMetadataPlugin,
      addTOCPlugin,
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
  basePath: process.env.BASE_PATH || "",
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH === "/" ? "" : process.env.BASE_PATH,
    shareUrl: process.env.SHARE_URL,
  },
}

export default function () {
  return plugins.reduce((acc, plugin) => plugin(acc), nextConfig)
}
