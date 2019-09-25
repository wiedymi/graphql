import fs from 'fs'
import uuid from 'uuid'

const whiteList = ['png', 'jpg', 'jpeg']

export const staticFiles = async (req, res) => {
  const path = `${process.cwd()}/uploads/${req.params.file}`

  if (!fs.existsSync(path)) {
    return res.status(404).send('Not found')
  }

  return res.sendFile(path)
}

export const singleUpload = async (file, opts = { whiteList }) => {
  return file.then(file => {
    const stream = file.createReadStream()
    const extension = file.mimetype.split('/')[1]

    if (!whiteList.includes(extension)) {
      throw new Error('No allowed extension')
    }

    const prefix = opts.prefix || ''
    const path = `${process.cwd()}/uploads/${prefix}${uuid()}.${extension}`

    if (!fs.existsSync(path)) {
      fs.mkdirSync(`${process.cwd()}/uploads/${prefix}`)
    }

    stream.pipe(fs.createWriteStream(path))

    return file
  })
}

export const multiUpload = async (files, opts = { whiteList }) => {
  return files.map(async raw => {
    const file = await raw.then(data => data)
    const stream = file.createReadStream()
    const extension = file.mimetype.split('/')[1]

    if (!whiteList.includes(extension)) {
      throw new Error('No allowed extension')
    }

    const prefix = opts.prefix || ''
    const path = `${process.cwd()}/uploads/${prefix}${uuid()}.${extension}`

    if (!fs.existsSync(path)) {
      fs.mkdirSync(`${process.cwd()}/uploads/${prefix}`)
    }

    stream.pipe(fs.createWriteStream(path))

    return file
  })
}
