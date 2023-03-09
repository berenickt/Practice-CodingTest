/** https://school.programmers.co.kr/learn/courses/30/lessons/120816
 * @param {*} slice
 * @param {*} n
 * @returns
 */
function solution(slice, n) {
  const pizza = parseInt(n / slice);
  return n % slice === 0 ? pizza : pizza + 1;
}
