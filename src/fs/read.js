import fs from 'fs'

const filePath = './fs/files/fileToRead.txt'

const read = async () => {
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    const data = await fs.promises.readFile(filePath, "utf-8")
    console.log(data)
};

await read();