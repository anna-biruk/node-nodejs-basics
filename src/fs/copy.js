import fs from 'fs'

const sourceFolderPath = './fs/files';
const destinationFolderPath = './fs/files_copy';

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
