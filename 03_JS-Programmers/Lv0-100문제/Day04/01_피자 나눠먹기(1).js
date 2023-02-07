/** https://school.programmers.co.kr/learn/courses/30/lessons/120814
 * ceil : 크거나 같은 숫자 중 가장 작은 숫자
 * @param {*} n 피자를 나눠먹을 사람의 수
 * @returns 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수
 */
function solution(n) {
  return Math.ceil(n / 7);
}
