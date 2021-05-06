import moduleParser from '../lib/moduleParser'
import config from '../config'

const _list = (): string[] => moduleParser.listModule(`${config.quimeraSrc}/projects`)
const _get = (name: string) => moduleParser.readIndex(`${config.quimeraSrc}/projects/${name}/`)
const _patch = (params: any) => moduleParser.writeIndex(`${config.quimeraSrc}/${params.path}/`, params)
const _post = (name: string) => moduleParser.createProject(name, `${config.quimeraSrc}/projects/`, `${config.quimeraSrc}/quimera-templates/project`)

export default {
  list: () => ({ data: _list().map((project: string) => ({ id: project }))}),
  get: (name: string) => ({ data: [_get(name.split('___').join('/'))] }),
  patch: (params: any) => _patch(params),
  post: (name: string) => _post(name.split('___').join('/'))
}
