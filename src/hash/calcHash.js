import fs from 'fs';
import crypto from 'crypto';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

const filePath = `${currentDir}/files/fileToCalculateHashFor.txt`;

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const fileStream = fs.createReadStream(filePath);

    fileStream.on('data', (data) => {
        hash.update(data);
    });

    fileStream.on('end', () => {
        const hexHash = hash.digest('hex');
        console.log(`Hash: ${hexHash}`);
    });

    fileStream.on('error', (error) => {
        console.error(`Error reading file: ${error.message}`);
    });


};

await calculateHash();