import filesys from '../lib/filesys'
import config from '../config'

const _list = (path?: string): string[] => {
  const content = filesys.listDirectory(`${config.quimeraSrc}/projects/${path ?? ''}`)
  if (content.find(c => c === 'index.js') && !!path) {
    return [path]
  }
  return content.filter(c => c !== 'index.js').map(c => _list(!!path ? `${path}/${c}` : c).flat()).flat()
}

const _get = (name: string) => {
  let stdout = filesys.readFile(`${config.quimeraSrc}/projects/${name}/index.js`)
  stdout = stdout.split('export default')[1].replace(/\'/g, '"')
  stdout = stdout.replace(/([^\"\w+:])(\w+):/gm, '$1"$2\":')
  return JSON.parse(stdout)
}

const _patch = (params: any) => {
  let content = JSON.stringify(params, null, 2)
  content = content.replace(/\"(\w+)\":/gm, '$1:')
  content = content.replace(/\"/g, '\'')
  filesys.writeFile(`${config.quimeraSrc}/${params.path}/index.js`, `export default ${content}\n`)
  return {"pk": params['path']}
}

export default {
  list: () => ({ data: _list().map((project: string) => ({ id: project }))}),
  get: (name: string) => ({ data: [_get(name.split('___').join('/'))] }),
  patch: (params: any) => _patch(params)
}
