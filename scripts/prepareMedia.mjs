import { readFile, writeFile } from "fs/promises"
import fetch from "node-fetch"
import { join } from "path"
import { csvParse } from "d3-dsv"

const mediaItemsRaw = await readFile(
  join(process.env.PWD, "data", "media.csv"),
  "utf8"
).then((d) => csvParse(d.trim()))

const allUrls = mediaItemsRaw.map((d) => d.url)

const previouslyPreparedMediaItems = await readFile(
  join(process.env.PWD, "public", "media.json"),
  "utf8"
)
  .then((d) => JSON.parse(d.trim()))
  .catch(() => [])

const mediaItems = mediaItemsRaw.filter((d) => {
  const relevantItem = previouslyPreparedMediaItems.find((s) => s.url === d.url)
  return !relevantItem
})

const vimeoItems = await Promise.all(
  mediaItems
    .filter((d) => d.url.includes("vimeo.com/"))
    .map(async (item) => {
      const u = encodeURI(item.url)
      const src = `https://vimeo.com/api/oembed.json?url=${u}`

      const data = await fetch(src)
        .then((res) => res.json())
        .catch(() => ({}))

      return {
        title: data.title || "",
        date: data.upload_date || "",
        upload_date: data.upload_date || "",
        thumbnail_url_with_play_button:
          data.thumbnail_url_with_play_button || "",
        thumbnail_width: data.thumbnail_width || "",
        thumbnail_height: data.thumbnail_height || "",
        video_id: data.video_id || "",
        author_name: data.author_name || "",
        mediaCategory: "video-vimeo",
        url: item.url,
      }
    })
)

const spotifyItems = await Promise.all(
  mediaItems
    .filter((d) => d.url.includes("spotify.com/"))
    .map(async (item) => {
      const u = encodeURI(item.url)
      const rootUrl = "https://open.spotify.com/embed/"
      const src = `${rootUrl}${
        u.split("spotify.com/")[1] || ""
      }?utm_source=generator`

      const dataRaw = await fetch(src)
        .then((res) => res.text())
        .catch(() => "")

      const dataRaw2 = dataRaw?.split(`__NEXT_DATA__`)[1] || ""
      const matchedData = dataRaw2?.match(/\>\{.+?\}\</)[0] || ""
      const parsedData = JSON.parse(matchedData.slice(1, -1))

      const relevantData =
        parsedData?.props?.pageProps?.state?.data?.entity || {}

      return {
        title: relevantData.title || "",
        subtitle: relevantData.subtitle || "",
        embedUrl: src,
        url: item.url,
        date: relevantData?.releaseDate?.isoString || "",
        mediaCategory: "audio-spotify",
      }
    })
)

const finalMediaItems = [
  ...previouslyPreparedMediaItems.filter((d) => allUrls.includes(d.url)),
  ...vimeoItems,
  ...spotifyItems,
]

await writeFile(
  join(process.env.PWD, "public", "media.json"),
  JSON.stringify(finalMediaItems),
  "utf8"
)
