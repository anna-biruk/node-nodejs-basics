import fs from 'fs'
import zlib from 'zlib'

const decompress = async () => {
    const fileToDecompress = './zip/files/archive.gz'
    const outputFile = "./zip/files/fileToCompress.txt"

    const readStream = fs.createReadStream(fileToDecompress);
    const writeStream = fs.createWriteStream(outputFile, 'utf-8')

    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log(`File decompressed successfully to ${outputFile}`);
    });
};

await decompress();