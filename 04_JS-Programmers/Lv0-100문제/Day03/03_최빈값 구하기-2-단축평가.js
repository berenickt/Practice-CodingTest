/** https://school.programmers.co.kr/learn/courses/30/lessons/120812
 *
 * @param {*} array
 * @returns
 */
function solution(array) {
  // 1. 출연 빈도 구하기
  const counts = array.reduce((acc, cur) => {
    // key에는 배열 요소, value에는 배열 요소의 갯수
    acc[cur] = (acc[cur] || 0) + 1;
    return acc; // {'요소': 개수, '요소', 개수, ... }
  }, {});

  // 2. count의 value 중 개수가 가장 큰 값
  const max = Math.max(...Object.values(counts));

  // 3. count의 key 중 max와 일치하는 key값을 새 배열로 반환 (최빈값 = mode)
  const modes = Object.keys(counts).filter((key) => counts[key] === max);

  return modes.length === 1 ? +modes[0] : -1;
}

console.log(solution([1, 2, 3, 3, 3, 4]));

/** 단축 평가(Short-circuit Evaluation)
 * ||(논리합), &&(논리곱) 연산자는 왼쪽부터 오른쪽으로 평가를 진행하는데,
 * 중간에 평가 결과가 나오면 오른쪽 끝까지 가지 않고 평가 결과를 반환한다
 *
 * 기존에 key로 저장된게 없다면, 0으로 세팅하고,
 * 기존에 key로 저장된게 있다면, 기존 value에 1을 더한다
 * acc[cur] = (acc[cur] || 0) + 1;
 */
