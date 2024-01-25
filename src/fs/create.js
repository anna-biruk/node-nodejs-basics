import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

const filePath = `${currentDir}/files/fresh.txt`;


const create = async () => {
    if (fs.existsSync(filePath)) {
        throw new Error('File already exists');
    }

    await fs.promises.writeFile(filePath, "I am fresh and young", { flags: "w+" });
    console.log('File is created successfully.');
};

await create();     