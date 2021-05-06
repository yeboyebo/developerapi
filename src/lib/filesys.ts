import fs from 'fs'
import fse from 'fs-extra'

const listDirectory = (dirName: string) => fs.readdirSync(dirName)
const createDirectory = (dir: string) => fs.mkdirSync(dir, { recursive: true })
const readFile = (file: string) => fs.readFileSync(file, 'utf8')
const writeFile = (file: string, content: string) => fs.writeFileSync(file, content, 'utf8')
const copy = (source: string, dest: string) => fse.copySync(source, dest)
const deleteFile = (file: string) => fs.unlinkSync(file)
const replaceInFile = (file: string, replaceArgs: string[][]) => {
  let content = readFile(file)
  replaceArgs.map(arg => content = content.replace(arg[0], arg[1]))
  return writeFile(file, content)
}

export default {
  createDirectory,
  listDirectory,
  readFile,
  writeFile,
  copy,
  replaceInFile,
  deleteFile
}