import * as fse from "fs-extra";
import * as fs from "fs";
import * as path from "path";

export function createFile(directory, name, content) {
    const filePath = path.join(directory, name);
    fse.ensureDirSync(path.dirname(filePath));
    fs.writeFileSync(filePath, content);
}
