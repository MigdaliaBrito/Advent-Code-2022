import fs from 'fs';
import readline from 'readline';

async function processLineByLine() {
    const fileStream = fs.createReadStream('day1/input.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    let highestCalories = 0;
    let talliedCalories = 0;


    for await (const calories of rl) {
        if (calories) {
            talliedCalories += +calories;
        }

        if (!calories) {
            if (talliedCalories > highestCalories) {
                highestCalories = talliedCalories;
            }
            talliedCalories = 0;
        }

    }
}

processLineByLine();
