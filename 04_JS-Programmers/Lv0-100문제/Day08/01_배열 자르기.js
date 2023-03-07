/** https://school.programmers.co.kr/learn/courses/30/lessons/120833
 * @param {*} numbers 정수배열
 * @param {*} num1 정수
 * @param {*} num2 정수
 * @returns `numbers`의 `num1`번째 인덱스부터 `num2`번째 인덱스까지 자른 정수 배열
 */
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

console.log(solution([1, 2, 3, 4, 5], 1, 3));
