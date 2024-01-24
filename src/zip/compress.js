import fs from 'fs';
import zlib from 'zlib';

const filePath = './zip/files/fileToCompress.txt';

const compress = async () => {
    const outputFile = "./zip/files/archive.gz"

    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(outputFile)

    const gzip = zlib.createGzip()

    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log(`File compressed successfully to ${outputFile}`);
    });
};

await compress();