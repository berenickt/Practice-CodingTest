/** https://school.programmers.co.kr/learn/courses/30/lessons/120585
 * @param {*} array 정수 배열
 * @param {*} height 머쓱이의 키
 * @returns 머쓱이보다 키 큰 사람 수
 */
function solution(array, height) {
  return array.filter((a) => a > height).length;
}

console.log(solution([149, 180, 192, 170], 167));
