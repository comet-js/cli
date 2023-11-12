import * as path from "path";
import * as fse from "fs-extra";
import * as fs from "fs";
import { build } from "./build.js";

export async function create(name, options) {
    const directory = path.resolve(process.cwd(), name);
    const template = options.template ?? "default";

    if (fs.existsSync(directory) && !options.merge && name !== ".") {
        if (options.force) {
            await fse.remove(directory)
        } else {
            throw Error(`There is already a folder named ${name}, please use comet 'create <app-name> --force' to overwrite the target directory or 'create <app-name> --merge' to merge the target directory.`);
        }
    } else if (name === "." && !options.merge && fs.readdirSync(directory).length > 0) {
        if (options.force) {
            await fse.remove(directory)
        } else {
            throw Error(`The target directory is not empty, please use comet 'create <app-name> --force' to overwrite the target directory or 'create <app-name> --merge' to merge the target directory.`);
        }
    }

    build(name, directory, template);
}
