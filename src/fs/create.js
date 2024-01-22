import fs from 'fs';

const filePath = "./fs/files/fresh.txt";


const create = async () => {
    if (fs.existsSync(filePath)) {
        throw new Error('File already exists');
    }

    await fs.promises.writeFile(filePath, "I am fresh and young", { flags: "w+" });
    console.log('File is created successfully.');
};

await create();     