/** https://school.programmers.co.kr/learn/courses/30/lessons/120876
 * @param {*} lines  선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열
 * @returns 두 개 이상의 선분이 겹치는 부분의 길이
 */
function solution(lines) {
  const visited = lines.reduce((a, [x, y]) => {
    for (let i = Math.min(x, y) + 1; i <= Math.max(x, y); i++) a[i] = a[i] ? a[i] + 1 : 1;
    return a;
  }, {});

  return Object.values(visited).filter((v) => v > 1).length;
}
