import fs from 'fs'
import crypto from 'crypto'

const filePath = './hash/files/fileToCalculateHashFor.txt';

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