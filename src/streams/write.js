import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

const filePath = `${currentDir}/files/fileToWrite.txt`;

const write = async () => {
    const writableStream = fs.createWriteStream(filePath, 'utf-8');

    process.stdin.pipe(writableStream);

    writableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })
};

await write();