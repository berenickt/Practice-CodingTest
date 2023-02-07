/** https://school.programmers.co.kr/learn/courses/30/lessons/120811
 *
 * @param {*} array
 * @returns
 */
function solution(array) {
  // 1. 오름차순 정렬 : array.sort((a, b) => a - b)
  // 2. 배열 크기의 절반에 해당하는 인덱스에 접근 - floor(같거나 작은 정수 중에서 가장 큰 수)
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
console.log(solution([1, 2, 7, 10, 11])); // 7
