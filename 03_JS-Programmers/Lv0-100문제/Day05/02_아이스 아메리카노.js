/** https://school.programmers.co.kr/learn/courses/30/lessons/120819
 * @param {*} money 머쓱이가 가지고 있는 돈
 * @returns 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열
 */
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
console.log(solution(5500));
