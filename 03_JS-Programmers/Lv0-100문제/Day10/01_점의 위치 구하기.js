/** https://school.programmers.co.kr/learn/courses/30/lessons/120841
 * @param {*} dot
 * @returns
 */
function solution(dot) {
  const [x, y] = dot;
  // y가 양수라면, x가 양수면 1, 아니면 2
  if (y > 0) return x > 0 ? 1 : 2;

  // x가 음수면 3, 아니면 4
  return x < 0 ? 3 : 4;
}

console.log(solution([2, 4]));
