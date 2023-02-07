/** https://school.programmers.co.kr/learn/courses/30/lessons/120817
 * @param {*} numbers 정수 배열
 * @returns numbers의 원소의 평균값
 */
function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}
