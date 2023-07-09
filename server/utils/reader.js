import jsYaml from "js-yaml"
import * as fs from "fs"
import * as path from 'path'

const messages = () => {
    let config
    try { config = jsYaml.load(fs.readFileSync(`${path.resolve()}/config/messages.yaml`, 'utf-8')) }
    catch (e) { console.error(e) }
    return config
}

export { messages }