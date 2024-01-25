import fs from 'fs';
import zlib from 'zlib';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

const decompress = async () => {
    const fileToDecompress = `${currentDir}/files/archive.gz`
    const outputFile = `${currentDir}/files/fileToCompress.txt`

    const readStream = fs.createReadStream(fileToDecompress);
    const writeStream = fs.createWriteStream(outputFile, 'utf-8')

    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log(`File decompressed successfully to ${outputFile}`);
    });
};

await decompress();