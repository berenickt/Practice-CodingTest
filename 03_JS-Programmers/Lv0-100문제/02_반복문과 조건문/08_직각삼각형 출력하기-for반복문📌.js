// https://school.programmers.co.kr/learn/courses/30/lessons/120823
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const num = Number(input[0]);
  let result = '*';
  for (let i = 0; i < num; i++) {
    console.log(result);
    result += '*';
  }
});
