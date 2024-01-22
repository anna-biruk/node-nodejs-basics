import fs from 'fs';

const filePath = "./fs/files";

const list = async () => {
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    const fileNames = await fs.promises.readdir(filePath)
    console.log(fileNames)
};

await list();