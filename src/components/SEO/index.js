import Head from "next/head"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()
const siteUrl = publicRuntimeConfig.shareUrl

export default function SEO({
  title,
  description = "Carbon Knowledge Hub",
  cover = "cover-lg.jpg",
  type = "website" /* website | article */,
}) {
  const slugUrl = siteUrl
  const coverImg = cover ? siteUrl + "/images/" + cover : ""
  const combinedTitle = title
    ? `Carbon Knowledge Hub | ${title}`
    : "Carbon Knowledge Hub"

  return (
    <Head>
      <title>{combinedTitle}</title>
      <meta name="description" content={description} />

      <meta name="og:type" content={type} />
      <meta name="og:url" content={slugUrl} />
      <meta name="og:title" content={combinedTitle} />
      <meta name="og:description" content={description} />
      {cover && <meta name="og:image" content={coverImg} />}

      {cover && <meta name="image" property="og:image" content={coverImg} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={slugUrl} />
      <meta name="twitter:title" content={combinedTitle} />
      <meta name="twitter:description" content={description} />
      {cover && <meta name="twitter:image" content={coverImg} />}

      <link rel="shortcut icon" href="/favicon.png" />

      <link rel="canonical" href={slugUrl} />
    </Head>
  )
}
