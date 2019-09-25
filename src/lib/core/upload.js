import fs from 'fs'
import uuid from 'uuid'
import jimp from 'jimp'

const whiteList = ['png', 'jpg', 'jpeg']

export const staticFiles = async (req, res) => {
  const path = `${process.cwd()}/uploads/${req.params.file}`

  if (!fs.existsSync(path)) {
    return res.status(404).send('Not found')
  }

  return res.sendFile(path)
}

const fileHandler = async (raw, opts) => {
  const file = await raw.then(data => data)
  const stream = file.createReadStream()
  const extension = file.mimetype.split('/')[1]

  if (!whiteList.includes(extension)) {
    throw new Error('No allowed extension')
  }

  const id = uuid()
  const prefix = opts.prefix || ''
  const path = `${process.cwd()}/uploads/${prefix}${id}.${extension}`
  const smallPath = `${process.cwd()}/uploads/${prefix}${id}.small.${extension}`
  const tinyPath = `${process.cwd()}/uploads/${prefix}${id}.tiny.${extension}`

  if (!fs.existsSync(path)) {
    fs.mkdirSync(`${process.cwd()}/uploads/${prefix}`, { recursive: true })
  }

  await stream.pipe(fs.createWriteStream(path))

  stream.on('end', async () => {
    const buffer = fs.readFileSync(path)
    const image = await jimp.read(buffer)

    image
      .resize(620, 620)
      .quality(80)
      .write(smallPath)

    image
      .resize(256, 256)
      .quality(80)
      .write(tinyPath)
  })

  stream.pipe(fs.createWriteStream(path))

  return file
}

export const singleUpload = async (file, opts = { whiteList }) => {
  return fileHandler(file, opts)
}

export const multiUpload = async (files, opts = { whiteList }) => {
  return files.map(async raw => fileHandler(raw, opts))
}
