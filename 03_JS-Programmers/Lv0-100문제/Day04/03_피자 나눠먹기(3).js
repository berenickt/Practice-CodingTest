/** https://school.programmers.co.kr/learn/courses/30/lessons/120816
 * @param {*} slice 피자 조각 수
 * @param {*} person 피자를 먹는 사람의 수
 * @returns person명의 사람이 최소 한 조각 이상 피자를 먹으려면, 최소 몇 판의 피자를 시켜야 하는지
 */
function solution(slice, person) {
  // 10 / 7 = 1.xx
  return Math.ceil(person / slice);
}
console.log(solution(7, 10));
