import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

const wrongFilenamePath = `${currentDir}/files/wrongFilename.txt`;
const properFilenamePath = `${currentDir}/files/properFilename.md`;


const rename = async () => {
    if (!fs.existsSync(wrongFilenamePath) || fs.existsSync(properFilenamePath)) {
        throw new Error('FS operation failed');
    }

    await fs.promises.rename(wrongFilenamePath, properFilenamePath)
    console.log("File renamed successfully")
};

await rename();