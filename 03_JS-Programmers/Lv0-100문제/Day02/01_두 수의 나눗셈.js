/** https://school.programmers.co.kr/learn/courses/30/lessons/120806
 * @param {*} num1
 * @param {*} num2
 * @returns
 *
 * 풀이과정
 * 1. num1을 num2로 나눈다.
 * 2. 나눈 값에 1000을 곱한다.
 * 3. 그 값에 정수부분을 구한다.
 */
function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}
console.log(solution(3, 2));
