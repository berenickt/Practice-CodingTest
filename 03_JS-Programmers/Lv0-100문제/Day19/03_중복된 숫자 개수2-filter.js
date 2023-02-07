/** https://school.programmers.co.kr/learn/courses/30/lessons/120583
 * @param {*} array 정수가 담긴 배열
 * @param {*} n 정수
 * @returns array에 n이 몇 개 있는 지
 */
function solution(array, n) {
  return array.filter((element) => n === element).length;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1)); // 2
console.log(solution([0, 2, 3, 4], 1)); // 0
