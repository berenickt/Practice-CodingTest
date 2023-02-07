/** https://school.programmers.co.kr/learn/courses/30/lessons/120811
 * @param {*} array  정수 배열
 * @returns 중앙값
 */
function solution(array) {
  array.sort((a, b) => a - b); // 오름차순
  return array[parseInt(array.length / 2)];
}

console.log(solution([1, 2, 7, 10, 11]));
