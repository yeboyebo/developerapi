import fs from 'fs'

const listDirectory = (dirName: string) => {
  return fs.readdirSync(dirName)
}
const readFile = (file: string) => {
  return fs.readFileSync(file, 'utf8')
}
const writeFile = (file: string, params: any) => {
  return fs.writeFileSync(file, params, 'utf8')
}

export default {
  listDirectory,
  readFile,
  writeFile
}