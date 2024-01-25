import { Worker, isMainThread } from 'worker_threads';
import * as os from 'os';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
    if (isMainThread) {
        const currentFile = fileURLToPath(import.meta.url);
        const currentDir = dirname(currentFile);

        const numCores = os.cpus().length;
        const workers = [];
        const results = [];

        const handleMessage = (index, message) => {
            results[index] = {
                status: message.status === 'resolved' ? 'resolved' : 'error',
                data: message.status === 'resolved' ? message.data : null
            };

            if (results.filter((res) => res !== undefined).length === numCores) {
                console.log('Results:', results);
            }
        };

        for (let i = 0; i < numCores; i++) {
            const worker = new Worker(`${currentDir}/worker.js`, { workerData: 10 + i });

            worker.on('message', handleMessage.bind(null, i));

            worker.on('error', (error) => {
                console.error(`Error in worker ${i}:`, error);
                handleMessage(i, { status: 'error', data: null });
            });

            workers.push(worker);
        }

        await Promise.all(workers.map((worker) => new Promise((resolve) => worker.on('exit', resolve))));
    }
};

await performCalculations();