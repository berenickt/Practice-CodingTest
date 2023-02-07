/** https://school.programmers.co.kr/learn/courses/30/lessons/120909
 * 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 함
 * @param {*} n 정수
 * @returns n이 제곱수라면 1을 아니라면 2
 */
function solution(n) {
  // n을 제곱한 것이 숫자 ? 1 : 2
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

console.log(solution(144)); // 1
console.log(solution(976)); // 2
