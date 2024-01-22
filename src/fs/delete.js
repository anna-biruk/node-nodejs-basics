import fs from 'fs'

const filePath = './fs/files/fileToRemove.txt'

const remove = async () => {
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    await fs.promises.unlink(filePath)
    console.log("File deleted")
}

await remove();