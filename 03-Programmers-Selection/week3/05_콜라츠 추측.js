/** https://school.programmers.co.kr/learn/courses/30/lessons/12943
 * 1937년 Collatz란 사람에 의해 제기된 이 추측은,
 * 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다.
 * 작업은 다음과 같습니다.
 * 1-1. 입력된 수가 짝수라면 2로 나눕니다.
 * 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
 * 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
 *
 * e.g. 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다.
 * 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수
 * @param {*} num 1 이상 8,000,000 미만인 정수
 * @returns
 * cf. 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환
 *
 * for 반복문 : break
 */
function solution(num) {
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) return answer;
    answer++;

    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
  }
  return -1;
}

// **** for 반복문 : return
function solution2(num) {
  let count = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return count;
    }
    count++;

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return -1;
}

// **** while
function solution3(num) {
  let answer = 0;

  const result = new Array(500).fill(1).forEach(el => {
    if (num !== 1) {
      num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
      answer++;
    }
  });

  return num !== 1 ? -1 : answer;
}

// **** forEach
function solution4(num) {
  let count = 0;

  const result = new Array(500).fill(1).reduce((cu, el) => {
    if (cu !== 1) {
      count++;
      return cu % 2 === 0
        ? cu / 2 // 짝수
        : cu * 3 + 1; // 홀수
    } else {
      return 1;
    }
  }, num);

  return result !== 1 ? -1 : count;
}

function solution5(num) {
  let count = 0;
  while (num !== 1) {
    if (count++ === 500) return -1;
    num = num % 2 ? num * 3 + 1 : num / 2;
  }
  return count;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
