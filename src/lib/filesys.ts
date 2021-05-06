import fs from 'fs'
import fse from 'fs-extra'

const listDirectory = (dirName: string) => fs.readdirSync(dirName)
const createDirectory = (dir: string) => fs.mkdirSync(dir, { recursive: true })
const read = (file: string) => fs.readFileSync(file, 'utf8')
const write = (file: string, content: string) => fs.writeFileSync(file, content, 'utf8')
const copy = (source: string, dest: string) => fse.copySync(source, dest)
const move = (source: string, dest: string) => fse.moveSync(source, dest)
const _delete = (file: string) => fs.unlinkSync(file)
const replaceInFile = (file: string, replaceArgs: string[][]) => {
  let content = read(file)
  replaceArgs.map(arg => content = content.replace(arg[0], arg[1]))
  return write(file, content)
}

export default {
  createDirectory,
  listDirectory,
  read,
  write,
  copy,
  move,
  replaceInFile,
  delete: _delete
}