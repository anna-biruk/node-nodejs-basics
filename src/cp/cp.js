import { spawn } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    const currentFile = fileURLToPath(import.meta.url);
    const currentDir = dirname(currentFile);

    const childProcess = spawn('node', [`${currentDir}/files/script.js`, ...(Array.isArray(args) ? args : [])], { stdio: ['pipe', 'pipe', 'inherit'] });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('exit', (code, signal) => {
        console.log(`Child process exited with code ${code} and signal ${signal}`);
        process.exit();
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3']);
