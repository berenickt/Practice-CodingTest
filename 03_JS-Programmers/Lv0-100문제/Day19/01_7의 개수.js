/** https://school.programmers.co.kr/learn/courses/30/lessons/120912
 * @param {*} array 정수 배열
 * @returns 7이 총 몇 개 있는지
 */
function solution(array) {
  return [...array.join('')].filter((a) => a === '7').length;
}

console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0
