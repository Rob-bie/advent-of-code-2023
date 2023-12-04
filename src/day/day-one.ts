import { InputParser } from '../util/input-parser';
const input = InputParser.readLines('day-one.txt');

function partOne(): void {
  let total = 0;
  for (const word of input) {
    const chars = word.split('');
    total += parseInt(`${chars.find((c) => c.match(/\d/))}${chars.reverse().find((c) => c.match(/\d/))}`);
  }
  console.log(`(1) Sum of values: ${total}`);
}

const lookup = { one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9' };
function partTwo(): void {
  let total = 0;
  const regexF = /\d|one|two|three|four|five|six|seven|eight|nine/;
  const regexB = /\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/;
  for (const word of input) {
    const first = (word.match(regexF) ?? [])[0]!;
    const second = (word.split('').reverse().join('').match(regexB) ?? [])[0]?.split('').reverse().join('')!;
    total += parseInt(`${lookup[first] ?? first}${lookup[second] ?? second}`);
  }
  console.log(`(2) Sum of values: ${total}`);
}

partOne();
partTwo();
