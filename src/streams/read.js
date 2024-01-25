import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

const filePath = `${currentDir}/files/fileToRead.txt`;

const read = async () => {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.pipe(process.stdout);

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })
};

await read();