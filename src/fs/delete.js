import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

const filePath = `${currentDir}/files/fileToRemove.txt`

const remove = async () => {
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    await fs.promises.unlink(filePath)
    console.log("File deleted")
}

await remove();