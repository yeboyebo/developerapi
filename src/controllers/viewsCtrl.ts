import moduleParser from '../lib/moduleParser'
import config from '../config'

const _list = (extension: string): string[] => moduleParser.listModule(`${config.quimeraSrc}/extensions/${extension}/views`)
const _post = (ext: string, view: string) => moduleParser.createView(view, `${config.quimeraSrc}/extensions/${ext}/views`, `${config.quimeraSrc}/quimera-templates/view`)
// const _get = (name: string) => moduleParser.readIndex(`${config.quimeraSrc}/extensions/${name}/`)
// const _patch = (params: any) => moduleParser.writeIndex(`${config.quimeraSrc}/${params.path}/`, params)
// const _post = (name: string) => moduleParser.createExtension(name, `${config.quimeraSrc}/extensions`, `${config.quimeraSrc}/quimera-templates/extension`)
// const _createSubview = (ext: string, view: string) => moduleParser.createSubview(view, `${config.quimeraSrc}/extensions/${ext}/views`, `${config.quimeraSrc}/quimera-templates/subview`)

export default {
  list: (extension: string) => ({ data: _list(extension).map((view: string) => ({ id: view }))}),
  post: (ext: string, view: string) => _post(ext.split('___').join('/'), view.split('___').join('/')),
  // get: (name: string) => ({ data: [_get(name.split('___').join('/'))] }),
  // patch: (params: any) => _patch(params),
  // post: (name: string) => _post(name.split('___').join('/')),
  // createSubview: (ext: string, view: string) => _createSubview(ext.split('___').join('/'), view.split('___').join('/'))
}
