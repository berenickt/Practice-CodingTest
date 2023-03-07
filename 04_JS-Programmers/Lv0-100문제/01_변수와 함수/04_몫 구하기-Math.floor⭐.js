/** https://school.programmers.co.kr/learn/courses/30/lessons/120802
 * @param {*} num1
 * @param {*} num2
 * @returns num1 / num2
 * 소수점 이하는 무시한 것이 몫이기에 정수로 바꿔주는 함수인 parseInt를 사용
 */
function solution(num1, num2) {
  // return Math.floor(num1 / num2);
  return parseInt(num1 / num2);
}

const solution2 = (num1, num2) => parseInt(num1 / num2);

console.log(solution(3, 2)); // 1
