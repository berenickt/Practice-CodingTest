/** https://school.programmers.co.kr/learn/courses/30/lessons/120815
 *
 * @param {*} n
 * @returns
 */
function solution(n) {
  for (let pizza = 1; pizza <= n; pizza++) {
    // (한 판의 6조각) % (사람수)
    if ((pizza * 6) % n === 0) {
      return pizza;
    }
  }
}
console.log(solution(10));
