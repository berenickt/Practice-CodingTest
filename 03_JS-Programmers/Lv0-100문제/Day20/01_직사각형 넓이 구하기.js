/** https://school.programmers.co.kr/learn/courses/30/lessons/120860
 * 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
 * @param {*} dots 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열
 * @returns 직사각형의 넓이
 */
function solution(dots) {
  const xDots = dots.flatMap(([x, y]) => x);
  const yDots = dots.flatMap(([x, y]) => y);
  const width = Math.max(...xDots) - Math.min(...xDots);
  const height = Math.max(...yDots) - Math.min(...yDots);
  return width * height;
}

// prettier-ignore
console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]])); // 1

// prettier-ignore
console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]])); // 4
