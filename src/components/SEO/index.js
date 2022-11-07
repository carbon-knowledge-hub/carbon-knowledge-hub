import Head from "next/head"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()
const siteUrl = publicRuntimeConfig.shareUrl

export default function SEO({
  title,
  description = "The Carbon Knowledge Hub gives the knowhow and insights to navigate the carbon markets. It is a collaboration between the Indonesian Chamber of Commerce and Industry (KADIN) and BloombergNEF, and part of the Carbon Centre of Excellence — one of Indonesia's B20 Legacy Programs.",
  cover = "cover-lg.jpg",
  type = "website" /* website | article */,
}) {
  const slugUrl = siteUrl
  const coverImg = cover ? siteUrl + "/images/" + cover : ""
  const combinedTitle = title
    ? `Carbon Knowledge Hub | ${title}`
    : "Carbon Knowledge Hub"

  const desc = description || "The Carbon Knowledge Hub gives the knowhow and insights to navigate the carbon markets. It is a collaboration between the Indonesian Chamber of Commerce and Industry (KADIN) and BloombergNEF, and part of the Carbon Centre of Excellence — one of Indonesia's B20 Legacy Programs."

  return (
    <Head>
      <title>{combinedTitle}</title>
      <meta name="description" content={desc} />

      <meta name="og:type" content={type} />
      <meta name="og:url" content={slugUrl} />
      <meta name="og:title" content={combinedTitle} />
      <meta name="og:description" content={desc} />
      {cover && <meta name="og:image" content={coverImg} />}

      {cover && <meta name="image" property="og:image" content={coverImg} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={slugUrl} />
      <meta name="twitter:title" content={combinedTitle} />
      <meta name="twitter:description" content={desc} />
      {cover && <meta name="twitter:image" content={coverImg} />}

      <link rel="shortcut icon" href="/favicon.png" />

      <link rel="canonical" href={slugUrl} />
    </Head>
  )
}
