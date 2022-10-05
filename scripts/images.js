const sharp = require("sharp")
const fs = require("fs/promises")
const imagesConfig = require("../images.config.js")
const path = require("path")

// import sharp from "sharp"
// import fs from "fs/promises"
// import imagesConfig from "../images.config.mjs"
// import path from "path"

const { readdir, rm, mkdir } = fs
const { sizes } = imagesConfig
const { join } = path

const imagesDir = join(process.cwd(), `images`)
const publicDir = join(process.cwd(), `public`)

function createSize(file, width = 300, ending = "sm") {
  const fileName = file.split(".")
  const name = fileName.slice(0, -1).join(".") // In case the image name contains dots...
  const suffix = fileName.slice(-1)[0]

  // Replace spaces with underscores to prevent any URI encoding issues with responsive images
  // (see Image component for client-side fix)
  const fixedImageName = name.split(" ").join("_")

  sharp(join(imagesDir, file))
    .resize({ width })
    .toFile(join(publicDir, `images/${fixedImageName}-${ending}.${suffix}`), (err) => {
      if (err) console.log(`Failed writing ${ending}: `, err)
      else console.log(`Done writing ${fixedImageName} ${ending}`)
    })
}

async function prepareImages() {
  const files = await readdir(imagesDir)

  const originalImages = files.filter((d) => {
    // In case the images are to be written to the same folder:
    //
    // if (d === ".DS_Store") return
    // const split = d.split(".")
    // const suffix = split[split.length - 1]
    // const suffix = d.split(".").slice(-1)[0]
    // const endings = sizes.map(({ ending }) => {
    //   return d.split(`-${ending}.${suffix}`).length === 2
    // })
    // return endings.indexOf(true)

    return d !== ".DS_Store"
  })

  await rm(join(publicDir, "images"), { recursive: true })
  await mkdir(join(publicDir, "images"))

  originalImages.forEach((file) => {
    sizes.forEach(({ ending, size }) => {
      createSize(file, size, ending)
    })
  })
}

prepareImages()
