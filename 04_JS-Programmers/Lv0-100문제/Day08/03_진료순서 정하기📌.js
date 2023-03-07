/** https://school.programmers.co.kr/learn/courses/30/lessons/120835
 * @param {*} emergency 손님의 응급도가 적힌 정수 배열
 * @returns 응급도가 높은 순서대로 진료 순서를 정한 배열
 */
function solution(emergency) {
  // 새 배열로 내림차순 정렬
  const sorted = [...emergency].sort((a, b) => b - a);

  // 기존 배열을 순회하는데, 정렬된 배열의 인덱스 위치에 +1
  return emergency.map((e) => sorted.indexOf(e) + 1);
}

console.log(solution([3, 76, 24])); // [ 3, 1, 2 ]
