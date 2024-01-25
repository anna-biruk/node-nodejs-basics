import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

const sourceFolderPath = `${currentDir}/files`;
const destinationFolderPath = `${currentDir}/files_copy`;

const copy = async () => {
    if (!fs.existsSync(sourceFolderPath) || fs.existsSync(destinationFolderPath)) {
        throw new Error('FS operation failed');
    }
    fs.cpSync(sourceFolderPath, destinationFolderPath, {
        recursive: true,
    });
    console.log('Files copied successfully.');

};

await copy();
