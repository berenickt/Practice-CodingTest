/** https://school.programmers.co.kr/learn/courses/30/lessons/12901
 * 2016년 a월 b일은 무슨 요일?
 * @param {*} a
 * @param {*} b
 * @returns
 *
 * new Date에서 month가 0부터 시작(1월이 0이고, 12월이 11)
 * getDay : 요일을 가져오는 메서드
 */
function solution(a, b) {
  const month = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let dateStr = '2016-' + a + '- ' + b;
  let date = new Date(dateStr);

  return month[date.getDay()];
}

console.log(solution(5, 24)); // "TUE"
