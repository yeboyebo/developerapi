import moduleParser from '../lib/moduleParser'
import config from '../config'

const _list = (): string[] => moduleParser.listModule(`${config.quimeraSrc}/extensions`)
const _get = (name: string) => moduleParser.readIndex(`${config.quimeraSrc}/extensions/${name}/`)
const _patch = (params: any) => moduleParser.writeIndex(`${config.quimeraSrc}/${params.path}/`, params)
const _post = (name: string) => moduleParser.createExtension(name, `${config.quimeraSrc}/extensions`, `${config.quimeraSrc}/quimera-templates/extension`)
const _createView = (ext: string, view: string) => moduleParser.createView(view, `${config.quimeraSrc}/extensions/${ext}/views`, `${config.quimeraSrc}/quimera-templates/view`)
const _createSubview = (ext: string, view: string) => moduleParser.createSubview(view, `${config.quimeraSrc}/extensions/${ext}/views`, `${config.quimeraSrc}/quimera-templates/subview`)

export default {
  list: () => ({ data: _list().map((extension: string) => ({ id: extension }))}),
  get: (name: string) => ({ data: [_get(name.split('___').join('/'))] }),
  patch: (params: any) => _patch(params),
  post: (name: string) => _post(name.split('___').join('/')),
  createView: (ext: string, view: string) => _createView(ext.split('___').join('/'), view.split('___').join('/')),
  createSubview: (ext: string, view: string) => _createSubview(ext.split('___').join('/'), view.split('___').join('/'))
}
