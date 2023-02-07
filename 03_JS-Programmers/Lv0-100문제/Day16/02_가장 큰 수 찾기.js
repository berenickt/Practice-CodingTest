/** https://school.programmers.co.kr/learn/courses/30/lessons/120899
 * @param {*} array 정수 배열
 * @returns 가장 큰 수와 그 수의 인덱스를 담은 배열
 */
function solution(array) {
  const max = Math.max(...array);
  return [max, array.indexOf(max)];
}
