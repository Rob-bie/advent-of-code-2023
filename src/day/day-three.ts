import { InputParser } from '../util/input-parser';
const input = InputParser.readLines('day-three.txt');

function partOne(): void {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    const row = input[i].split('');
    let n = '';
    for (let j = 0; j < row.length; j++) {
      if (row[j].match(/\d/)) {
        let adjacent = false;
        while (row[j] && row[j].match(/\d/)) {
          n += row[j];
          if (
            (input[i + 1] && !input[i + 1][j].match(/[\.0-9]/)) ||
            (input[i - 1] && !input[i - 1][j].match(/[\.0-9]/)) ||
            (input[j + 1] && !input[i][j + 1].match(/[\.0-9]/)) ||
            (input[j - 1] && !input[i][j - 1].match(/[\.0-9]/)) ||
            (input[i + 1] && input[j + 1] && !input[i + 1][j + 1].match(/[\.0-9]/)) ||
            (input[i - 1] && input[j + 1] && !input[i - 1][j + 1].match(/[\.0-9]/)) ||
            (input[i + 1] && input[j - 1] && !input[i + 1][j - 1].match(/[\.0-9]/)) ||
            (input[i - 1] && input[j - 1] && !input[i - 1][j - 1].match(/[\.0-9]/))
          ) {
            adjacent = true;
          }
          j++;
        }
        if (adjacent) total += parseInt(n);
        n = '';
      }
    }
  }
  console.log(`(1) Sum of values: ${total}`);
}

function partTwo(): void {
  let total = 0;
  const gears: { [key: string]: string[] } = {};
  for (let i = 0; i < input.length; i++) {
    const row = input[i].split('');
    let n = '';
    for (let j = 0; j < row.length; j++) {
      if (row[j].match(/\d/)) {
        const connectedGears = new Set<string>();
        while (row[j] && row[j].match(/\d/)) {
          n += row[j];
          if (input[i + 1] && input[i + 1][j] === '*') connectedGears.add(`${i + 1}-${j}`);
          if (input[i - 1] && input[i - 1][j] === '*') connectedGears.add(`${i - 1}-${j}`);
          if (input[j + 1] && input[i][j + 1] === '*') connectedGears.add(`${i}-${j + 1}`);
          if (input[j - 1] && input[i][j - 1] === '*') connectedGears.add(`${i}-${j - 1}`);
          if (input[i + 1] && input[j + 1] && input[i + 1][j + 1] === '*') connectedGears.add(`${i + 1}-${j + 1}`);
          if (input[i - 1] && input[j + 1] && input[i - 1][j + 1] === '*') connectedGears.add(`${i - 1}-${j + 1}`);
          if (input[i + 1] && input[j - 1] && input[i + 1][j - 1] === '*') connectedGears.add(`${i + 1}-${j - 1}`);
          if (input[i - 1] && input[j - 1] && input[i - 1][j - 1] === '*') connectedGears.add(`${i - 1}-${j - 1}`);
          j++;
        }
        connectedGears.forEach((g) => (gears[g] ? gears[g].push(n) : (gears[g] = [n])));
        n = '';
      }
    }
  }
  for (const [_, vs] of Object.entries(gears)) {
    if (vs.length === 2) total += parseInt(vs[0]) * parseInt(vs[1]);
  }
  console.log(`(2) Sum of values: ${total}`);
}

partOne();
partTwo();
