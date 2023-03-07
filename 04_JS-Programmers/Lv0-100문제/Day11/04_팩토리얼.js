/** https://school.programmers.co.kr/learn/courses/30/lessons/120848
 * `i`팩토리얼 `(i!)`은 1부터 i까지 정수의 곱을 의미
 * e.g. 5! = 5 * 4 * 3 * 2 * 1 = 120
 *
 * @param {*} n 정수
 * @returns 조건을 만족하는 가장 큰 정수 i
 */
function solution(n) {
  let i = 1;
  let factorial = 1;

  while (factorial * i < n) {
    i++;
    factorial *= i;
  }

  return i;
}

console.log(solution(3628800)); // 10! = 3,628,800
console.log(solution(3628800)); // 10! = 3,628,800
