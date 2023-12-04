import { InputParser } from '../util/input-parser';
const input = InputParser.readLines('day-two.txt');

function partOne(): void {
  let total = 0;
  for (const game of input) {
    let invalid = false;
    const colorMap = { red: 0, blue: 0, green: 0 };
    const gameIdRegex = /Game ([0-9]+):/;
    const gameId = parseInt(game.match(gameIdRegex)[1]);
    const parts = game.split(gameIdRegex);
    parts[parts.length - 1]
      .split(';')
      .map((draws) => draws.split(','))
      .forEach((round) => {
        round.forEach((color) => {
          const [_, count, c] = color.split(' ');
          colorMap[c] = parseInt(count);
          if (invalid || colorMap.red > 12 || colorMap.green > 13 || colorMap.blue > 14) {
            invalid = true;
          }
        });
      });
    if (!invalid) total += gameId;
  }
  console.log(`(1) Sum of values: ${total}`);
}

function partTwo(): void {
  let total = 0;
  for (const game of input) {
    const colorMap = { red: 0, blue: 0, green: 0 };
    const gameIdRegex = /Game ([0-9]+):/;
    const parts = game.split(gameIdRegex);
    parts[parts.length - 1]
      .split(';')
      .map((draws) => draws.split(','))
      .forEach((round) => {
        round.forEach((color) => {
          const [_, count, c] = color.split(' ');
          const numeric = parseInt(count);
          if (numeric > colorMap[c]) colorMap[c] = numeric;
        });
      });
    total += colorMap.red * colorMap.blue * colorMap.green;
  }
  console.log(`(2) Sum of values: ${total}`);
}

partOne();
partTwo();
