/**
 * A, B, C를 입력받아 세 수 중 가장 작은 값을 출력
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns
 */
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));
