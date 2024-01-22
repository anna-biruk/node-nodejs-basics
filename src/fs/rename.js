import fs from 'fs'

const wrongFilenamePath = "./fs/files/wrongFilename.txt";
const properFilenamePath = "./fs/files/properFilename.md";


const rename = async () => {
    if (!fs.existsSync(wrongFilenamePath) || fs.existsSync(properFilenamePath)) {
        throw new Error('FS operation failed');
    }

    await fs.promises.rename(wrongFilenamePath, properFilenamePath)
    console.log("File renamed successfully")
};

await rename();