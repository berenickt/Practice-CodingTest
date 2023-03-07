/** https://school.programmers.co.kr/learn/courses/30/lessons/120807
 * @param {*} num1
 * @param {*} num2
 * @returns num1과 num2가 같으면 1, 아니면 -1
 */
function solution(num1, num2) {
  if (num1 === num2) {
    return 1;
  } else {
    return -1;
  }
}
console.log(solution(3, 2));
