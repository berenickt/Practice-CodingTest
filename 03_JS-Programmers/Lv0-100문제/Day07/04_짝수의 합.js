/** https://school.programmers.co.kr/learn/courses/30/lessons/120831
 * @param {*} n 정수
 * @returns n 이하의 짝수를 모두 더한 값
 */
function solution(n) {
  sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) sum += i;
  }
  return sum;
}

console.log(solution(5));
