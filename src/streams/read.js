import fs from 'fs';

const filePath = './streams/files/fileToRead.txt';

const read = async () => {
    const readableStream = fs.createReadStream(filePath, 'utf8');

    readableStream.pipe(process.stdout);

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })
};

await read();