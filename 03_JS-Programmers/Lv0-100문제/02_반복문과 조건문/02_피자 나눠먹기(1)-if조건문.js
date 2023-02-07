/** https://school.programmers.co.kr/learn/courses/30/lessons/120814
 *
 * @param {*} n
 * @returns
 */
function solution(n) {
  let pizza = parseInt(n / 7);
  if (n % 7 !== 0) pizza += 1;
  return pizza;
}
