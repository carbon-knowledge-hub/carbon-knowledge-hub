import { join, parse } from "path"
import { serialize } from "next-mdx-remote/serialize"

import getPages from "./getPages"

export default async function getPage({
  slug = "",
  pageType = "factsheets",
  options = {},
}) {
  const allPages = await getPages({ pageType })

  const relevantSlug = join("/", pageType, parse(slug).name)
  const relevantPage = allPages.find((s) => s.slug === relevantSlug)
  const content = relevantPage?.content || ""

  if (!content) return {}

  const serialized = await serialize(content, {
    parseFrontmatter: true,
    ...options,
  })

  serialized.frontmatter = {
    ...(relevantPage?.frontmatter || {}),
    ...serialized.frontmatter,
    slug: relevantPage.slug || "",
  }

  return serialized
}
