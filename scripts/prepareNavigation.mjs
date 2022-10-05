import { readdir, writeFile, readFile } from "fs/promises"

import { extractMetadata } from "./extractMetadata.mjs"

async function getDirectory(p = "./pages/docs", name = "docs") {
  const pagesDirectory = await readdir("./pages")
  const hasDirectory = pagesDirectory.includes(name)
  if (!hasDirectory) return []
  return await readdir(p)
}

const basics = await getDirectory("./pages/basics", "basics")
const factsheets = await getDirectory("./pages/factsheets", "factsheets")
// const about = await getDirectory("./pages/about", "about")

const keepMdx = (d) => d.includes(".mdx")

const getSlug = (prefix) => (d) => {
  const slug = d.split(".mdx").join("")
  return { href: `${prefix || ""}/${slug}`, slug }
}

async function getDirRoutes(dirContent, dirName, processMetadata) {
  if (!dirContent?.length) return []
  return await Promise.all(
    dirContent
      .filter(keepMdx)
      .map(getSlug(`/${dirName}`))
      .map(({ slug, ...restProps }) =>
        readFile(`./pages/${dirName}/${slug}.mdx`, "utf8").then((content) => {
          const metadata = extractMetadata(content, slug)
          if (processMetadata) return processMetadata(metadata, restProps, slug)
          else return { ...metadata, ...restProps }
        })
      )
  )
}

const basicsRoutes = await getDirRoutes(basics, "basics")
const factsheetsRoutes = await getDirRoutes(factsheets, "factsheets")

const routes = [...basicsRoutes, ...factsheetsRoutes]

console.log("Routes: ", routes.map(d => d.href))

const content = `export const routes = ${JSON.stringify(routes)}`

await writeFile("./src/utils/dynamicRoutes.js", content)

console.log("Done writing navigation!")
