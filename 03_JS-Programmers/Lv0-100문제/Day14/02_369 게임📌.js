/** https://school.programmers.co.kr/learn/courses/30/lessons/120891
 * 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신
 * 3, 6, 9의 개수만큼 박수를 치는 게임
 *
 * @param {*} order 머쓱이가 말해야하는 숫자
 * @returns 머쓱이가 쳐야할 박수 횟수
 */
function solution(order) {
  // (문자 단위로 쪼개고).(3, 6, 9인지 확인).크기
  return [...('' + order)].filter((num) => num === '3' || num === '6' || num === '9').length;
}

console.log(solution(3)); // 1
console.log(solution(29423)); // 2
