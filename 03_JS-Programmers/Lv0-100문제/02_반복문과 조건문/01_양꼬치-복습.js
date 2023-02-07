/** https://school.programmers.co.kr/learn/courses/30/lessons/120830
 * @param {*} n
 * @param {*} k
 * @returns
 */
function solution(n, k) {
  return n * 12000 + (k - parseInt(n / 10)) * 2000;
}
