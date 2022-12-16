import { Console } from 'console';
import fs from 'fs';
import readline from 'readline';

async function processLineByLine() {
	const fileStream = fs.createReadStream('day1/input.txt');
	const elves: number[] = [];

	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity,
	});

	let calories: number[] = []

	for await (const calorie of rl) {
		calories.push(+calorie)
	}

	return calories;
}

async function topElf() {
	const lines = await processLineByLine();
	const elves: number[] = [];
	let talliedCalories = 0;

	for (let index = 0; index < lines.length; index++) {
		const calories = lines[index];
		if (calories) {
			talliedCalories += +calories;
		}

		if (!calories || index === lines.length - 1) {
			elves.push(talliedCalories);
			talliedCalories = 0;
		}
	}
	elves.sort((a, b) => b - a);

	const top3Cals = elves.slice(0, 3).reduce((acc, currentValue) => acc + currentValue, 0)

	console.log(top3Cals);

}

topElf();
