/** https://school.programmers.co.kr/learn/courses/30/lessons/68644
 * @param {*} numbers 정수 배열
 * @returns numbers에서 서로 다른 인덱스에 있는 2개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순
 */
function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (answer.includes(sum) === false) answer.push(sum);
    }
  }

  return answer.sort((a, b) => a - b);
}

// **** for : new Set
function solution2(numbers) {
  const answer = new Set([]);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      answer.add(sum);
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
}

// **** forEach
function solution3(numbers) {
  const answer = [];

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1).forEach(num2 => {
      const sum = num1 + num2;

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    });
  });

  return answer.sort((a, b) => a - b);
}

// **** forEach : new Set
function solution4(numbers) {
  const answer = new Set([]);

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1).forEach(num2 => {
      const sum = num1 + num2;

      answer.add(sum);
    });
  });

  return Array.from(answer).sort((a, b) => a - b);
}

function solution5(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1])); // [ 2, 3, 4, 5, 6, 7 ]
console.log(solution([5, 0, 2, 7])); // [ 2, 5, 7, 9, 12 ]
