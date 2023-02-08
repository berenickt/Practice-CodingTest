/** https://school.programmers.co.kr/learn/courses/30/lessons/42842
 *
 * @param {*} brown
 * @param {*} red
 * @returns
 *
 * brown 블록과 red 블록의 규칙을 찾는게 우선이다.
 * 1. 전체 블록은 “가로 >= 세로”
 * 2. red 블록은 내키는대로 존재하고 brown은 그것을 1겹으로 둘러싸고 있음.
 * for문, while문, 재귀 중 아무거나 사용하여 완전탐색
 */
function solution(brown, red) {
  const big = brown + red;
  let max = Math.floor(Math.sqrt(big));

  for (let i = 3; i < max + 1; i++) {
    if (big % i === 0 && (big / i - 2) * (i - 2) === red) return [big / i, i];
  }
}
