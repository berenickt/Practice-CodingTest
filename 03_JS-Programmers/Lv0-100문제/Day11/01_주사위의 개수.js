/** https://school.programmers.co.kr/learn/courses/30/lessons/120845
 * @param {*} box 상자의 가로, 세로, 높이가 저장되어있는 배열
 * @param {*} n 주사위 모서리의 길이 정수
 * @returns 상자에 들어갈 수 있는 주사위의 최대 개수
 */
function solution(box, n) {
  // 직육면체 부피 = (가로) x (세로) x (높이)
  return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
}

console.log(solution([1, 1, 1], 1)); // 1
console.log(solution([10, 8, 6], 3)); // 12
