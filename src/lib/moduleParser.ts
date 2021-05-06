import filesys from './filesys'

const _listModule = (fixed: string, path?: string): string[] => {
  const content = filesys.listDirectory(`${fixed}/${path ?? ''}`)
  if (content.find(c => c === 'index.js') && !!path) {
    return [path]
  }
  return content.filter(c => c !== 'index.js').map(c => _listModule(fixed, !!path ? `${path}/${c}` : c).flat()).flat()
}

const _readIndex = (path: string) => {
  let stdout = filesys.readFile(`${path}/index.js`)
  stdout = stdout.split('export default')[1].replace(/\'/g, '"')
  stdout = stdout.replace(/([^\"\w+:])(\w+):/gm, '$1"$2\":')
  return JSON.parse(stdout)
}

const _writeIndex = (path: string, params: any) => {
  let content = JSON.stringify(params, null, 2)
  content = content.replace(/\"(\w+)\":/gm, '$1:')
  content = content.replace(/\"/g, '\'')
  filesys.writeFile(`${path}/index.js`, `export default ${content}\n`)
  return {pk: params.path}
}

export default {
  listModule: _listModule,
  readIndex: _readIndex,
  writeIndex: _writeIndex
}