/** https://school.programmers.co.kr/learn/courses/30/lessons/120831
 * @param {*} n
 * @returns
 */

function solution(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
