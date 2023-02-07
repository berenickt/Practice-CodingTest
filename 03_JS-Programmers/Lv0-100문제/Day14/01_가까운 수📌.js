/** https://school.programmers.co.kr/learn/courses/30/lessons/120890
 * @param {*} array 정수 배열
 * @param {*} n 정수
 * @returns array에 들어있는 정수 중 n과 가장 가까운 수
 */
function solution(array, n) {
  // 각 요소에 n을 뺀 절대값 중 최소값
  const minDiff = Math.min(...array.map((a) => Math.abs(a - n)));

  // (오름차순).(minDiff와 같은 절대값 a-n 값을 찾기)
  return array.sort((a, b) => a - b).find((a) => Math.abs(a - n) === minDiff);
}

console.log(solution([3, 10, 28], 20)); // 3, 10, 28 중 20과 가장 가까운 수는 28
