import chalk from "chalk";
import { copyTemplate, createFile } from "./file.js";

export function build(name, directory, template) {
    console.log(`📦  Creating your Comet application in ${chalk.yellow(directory)}.`);

    copyTemplate(directory, template);

    const packageFile = {
        name,
        version: '1.0.0',
        private: true,
        devDependencies: {},
        dependencies: {},
    }

    createFile(directory, "package.json", JSON.stringify(packageFile, null, 2));
}
