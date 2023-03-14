/** https://school.programmers.co.kr/learn/courses/30/lessons/12910
 * array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열
 * @param {*} arr
 * @param {*} divisor
 * @returns divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1
 */
function solution(arr, divisor) {
  const answer = arr.filter((el) => el % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5));
