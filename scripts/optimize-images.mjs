import { mkdir, readdir, rm } from 'node:fs/promises'
import { basename, extname, join } from 'node:path'
import sharp from 'sharp'

const inputDirectory = 'assets/source-images'
const outputDirectory = 'public/images'
const iconDirectory = 'public/icons'
const widths = [480, 960, 1600]

await mkdir(outputDirectory, { recursive: true })
await rm(outputDirectory, { recursive: true, force: true })
await mkdir(outputDirectory, { recursive: true })
await mkdir(iconDirectory, { recursive: true })

const files = (await readdir(inputDirectory)).filter((file) => /\.(png|jpe?g)$/i.test(file))

await Promise.all(files.flatMap((file) => {
  const source = join(inputDirectory, file)
  const name = basename(file, extname(file))

  return widths.map((width) => sharp(source)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: width === 480 ? 76 : 82, effort: 6 })
    .toFile(join(outputDirectory, `${name}-${width}.webp`)))
}))

await Promise.all([192, 512].map((size) => sharp(join(inputDirectory, 'skyline.png'))
  .resize(size, size, { fit: 'cover', position: 'centre' })
  .composite([{ input: Buffer.from(`<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${Math.round(size * .2)}" fill="#071a35" fill-opacity=".24"/></svg>`) }])
  .png({ compressionLevel: 9 })
  .toFile(join(iconDirectory, `icon-${size}.png`))))

console.log(`Optimized ${files.length} images into responsive WebP variants.`)
