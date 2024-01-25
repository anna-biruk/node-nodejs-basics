import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

const filePath = `${currentDir}/files/fileToRead.txt`

const read = async () => {
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    const data = await fs.promises.readFile(filePath, "utf-8")
    console.log(data)
};

await read();