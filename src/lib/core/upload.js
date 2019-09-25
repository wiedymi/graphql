import fs from 'fs'

export const staticFiles = async (req, res) => {
  const path = `${process.cwd()}/uploads/${req.params.file}`

  if (!fs.existsSync(path)) {
    return res.status(404).send('Not found')
  }

  return res.sendFile(path)
}
