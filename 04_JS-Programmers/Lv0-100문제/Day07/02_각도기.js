/** https://school.programmers.co.kr/learn/courses/30/lessons/120829
 *
 * @param {*} angle 각
 * @returns 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4
 */
function solution(angle) {
  if (angle === 180) return 4;
  else if (angle > 90) return 3;
  else if (angle === 90) return 2;
  else return 1;
}

console.log(solution(70));
