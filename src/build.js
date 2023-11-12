import chalk from "chalk";
import { createFile } from "./file.js";

export function build(name, directory) {
    console.log(`✨  Creating project in ${chalk.yellow(directory)}.`);

    const packageFile = {
        name,
        version: '1.0.0',
        private: true,
        devDependencies: {},
        dependencies: {},
    }

    createFile(directory, "package.json", JSON.stringify(packageFile, null, 2));
}
