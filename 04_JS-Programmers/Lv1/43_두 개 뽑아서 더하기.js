function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}

function solution2(numbers) {
  const answer = [];

  for (let i = 0, len = numbers.length; i < len; i++) {
    for (let j = i + 1, len = numbers.length; j < len; j++) {
      if (!answer.includes(numbers[i] + numbers[j])) answer.push(numbers[i] + numbers[j]);
    }
  }

  return answer.sort((a, b) => a - b);
}
