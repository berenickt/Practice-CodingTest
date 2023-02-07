/** https://school.programmers.co.kr/learn/courses/30/lessons/120837
 * @param {*} hp 사냥감의 체력
 * @returns 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지
 */
function solution(hp) {
  let count = 0;
  count += Math.floor(hp / 5); // 장군 개미
  hp = hp % 5;
  count += Math.floor(hp / 3); // 병정 개미
  hp = hp % 3;
  return count + hp;
}

console.log(solution(23)); // 5
// -> count(4), hp(3)
// -> count(5), hp(1)
