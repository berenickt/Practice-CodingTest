/** https://school.programmers.co.kr/learn/courses/30/lessons/12943
 *
 */

/**
 * 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될 때까지 다음 작업을 반복하면,
 * 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.
 * 1. 입력된 수가 짝수라면 2로 나눕니다.
 *    - 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
 * 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
 *
 * 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수
 *
 * e.g. 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됨
 * cf. 주어진 수가 1인  경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환
 * @param {*} num
 * @returns
 */
function solution(num) {
  let count = 0;
  // num이 1이 아니고, count가 500이 아니면 진행
  while (num != 1 && count != 500) {
    num % 2 == 0
      ? (num = num / 2) // 짝수이면, 2로 나눠줌
      : (num = num * 3 + 1); // 홀수이면, 3을 곱하고 1을 더함
    count++;
  }
  return num === 1 ? count : -1;
}

console.log(solution(6));
