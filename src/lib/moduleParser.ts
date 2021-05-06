import filesys from './filesys'

const _listModule = (fixed: string, path?: string): string[] => {
  const content = filesys.listDirectory(`${fixed}/${path ?? ''}`)
  if (content.find(c => c === 'index.js') && !!path) {
    return [path]
  }
  return content.filter(c => c !== 'index.js').map(c => _listModule(fixed, !!path ? `${path}/${c}` : c).flat()).flat()
}

const _readIndex = (path: string) => {
  let content = filesys.readFile(`${path}/index.js`)
  content = content.split('export default')[1].replace(/\'/g, '"')
  content = content.replace(/([^\"\w+:])(\w+):/gm, '$1"$2\":')
  return JSON.parse(content)
}

const _writeIndex = (path: string, params: any) => {
  let content = JSON.stringify(params, null, 2)
  content = content.replace(/\"(\w+)\":/gm, '$1:')
  content = content.replace(/\"/g, '\'')
  filesys.writeFile(`${path}/index.js`, `export default ${content}\n`)
  return {pk: params.path}
}

const _createModule = (name: string, dir: string, template: string) => {
  filesys.createDirectory(`${dir}/${name.split('/').slice(0, -1).join('/')}`)
  filesys.copy(template, `${dir}/${name}`)
}

const _createProject = (name: string, dir: string, template: string) => {
  _createModule(name, dir, template)
  filesys.replaceInFile(`${dir}/${name}/index.js`, [['__template__', name]])
  return {pk: name}
}

const _createExtension = (name: string, dir: string, template: string) => {
  _createModule(name, dir, template)
  filesys.replaceInFile(`${dir}/${name}/index.js`, [['__template__', name]])
  filesys.deleteFile(`${dir}/${name}/views/.tmp`)
  return {pk: dir}
}

export default {
  listModule: _listModule,
  readIndex: _readIndex,
  writeIndex: _writeIndex,
  createProject: _createProject,
  createExtension: _createExtension
}