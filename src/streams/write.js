import fs from 'fs';

const filePath = './streams/files/fileToWrite.txt';

const write = async () => {
    const writableStream = fs.createWriteStream(filePath, 'utf-8');

    process.stdin.pipe(writableStream);

    writableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })
};

await write();