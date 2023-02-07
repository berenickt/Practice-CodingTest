/** https://school.programmers.co.kr/learn/courses/30/lessons/120875
 * @param {*} dots 점 네 개의 좌표를 담은 2차원 배열
 * @returns 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0
 */
function solution(dots) {
  const getInclination = ([[x1, y1], [x2, y2]]) => (x2 !== x1 ? (y2 - y1) / (x2 - x1) : Infinity);
  const isParallel = (line1, line2) => getInclination(line1) === getInclination(line2);

  return dots.some((dot) => {
    const line1 = [dots[0], dot];
    const line2 = dots.filter((dot) => !line1.includes(dot));
    return isParallel(line1, line2);
  })
    ? 1
    : 0;
}

// 점 [1, 4], [3, 8]을 잇고 [9, 2], [11, 6]를 이으면 두 선분은 평행
console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); // 1

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); // 0
