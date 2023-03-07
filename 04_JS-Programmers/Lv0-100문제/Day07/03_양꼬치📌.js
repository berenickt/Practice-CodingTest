/** https://school.programmers.co.kr/learn/courses/30/lessons/120830
 * @param {*} lamlSkewers 양꼬치 개수
 * @param {*} drink 음료수 개수
 * @returns 총얼마를 지불해야 하는지
 */
function solution(lamlSkewers, drink) {
  return lamlSkewers * 12000 + (drink - Math.floor(lamlSkewers / 10)) * 2000;
}
console.log(solution(10, 3));
