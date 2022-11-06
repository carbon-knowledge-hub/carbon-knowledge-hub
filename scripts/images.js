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
const partnerImagesDir = join(process.cwd(), `images/partners`)
const publicDir = join(process.cwd(), `public`)

function createSize(file, width = 300, ending = "sm", subFolder = "") {
  const fileName = file.split(".")
  const name = fileName.slice(0, -1).join(".") // In case the image name contains dots...
  const suffix = fileName.slice(-1)[0]

  // Replace spaces with underscores to prevent any URI encoding issues with responsive images
  // (see Image component for client-side fix)
  const fixedImageName = name.split(" ").join("_")

  sharp(join(imagesDir, subFolder, file), { limitInputPixels: 0 })
    .resize({ width })
    .toFile(
      join(
        publicDir,
        `images${subFolder}/${fixedImageName}-${ending}.${suffix}`
      ),
      (err) => {
        if (err) console.log(`Failed writing ${ending}: `, err)
        else console.log(`Done writing ${fixedImageName} ${ending}`)
      }
    )
}

function createPartnerLogoSize(
  file,
  width = 300,
  ending = "sm",
  subFolder = ""
) {
  const fileName = file.split(".")
  const name = fileName.slice(0, -1).join(".") // In case the image name contains dots...
  const suffix = fileName.slice(-1)[0]

  // Replace spaces with underscores to prevent any URI encoding issues with responsive images
  // (see Image component for client-side fix)
  const fixedImageName = name.split(" ").join("_")

  sharp(join(imagesDir, subFolder, file), { limitInputPixels: 0 })
    .resize({
      width,
      height: width / 2,
      fit: "contain",
      position: "center",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .toFile(
      join(
        publicDir,
        `images${subFolder}/${fixedImageName}-${ending}.${suffix}`
      ),
      (err) => {
        if (err) console.log(`Failed writing ${ending}: `, err)
        else console.log(`Done writing ${fixedImageName} ${ending}`)
      }
    )
}

const cleanFiles = (d) => d !== ".DS_Store" && d.split(".").length > 1

async function prepareImages() {
  const files = await readdir(imagesDir)
  const partnerLogos = await readdir(partnerImagesDir)

  const originalImages = files.filter((d) => cleanFiles(d))
  const originalPartnerLogos = partnerLogos.filter((d) => cleanFiles(d))

  await rm(join(publicDir, "images"), { recursive: true })
  await mkdir(join(publicDir, "images"))
  await mkdir(join(publicDir, "images/partners"))

  originalImages.forEach((file) => {
    sizes.forEach(({ ending, size }) => {
      createSize(file, size, ending)
    })
  })

  originalPartnerLogos.forEach((file) => {
    sizes.forEach(({ ending, size }) => {
      createPartnerLogoSize(file, size, ending, "/partners")
    })
  })
}

prepareImages()
