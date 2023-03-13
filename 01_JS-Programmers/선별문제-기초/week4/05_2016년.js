const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

/** https://school.programmers.co.kr/learn/courses/30/lessons/12901
 * 2016년 1월 1일은 금요일입니다.
 * 2016년 a월 b일은 무슨 요일일까요?
 * 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수
 *
 * cf. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다.
 * e.g. a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환
 * @param {*} a 월
 * @param {*} b 일
 * @returns 2016년 a월 b일이 무슨 요일
 */
function solution(a, b) {
  let dateStr = '2016-' + a + '- ' + b;
  let date = new Date(dateStr);
  return week[date.getDay()];
}

function solution2(a, b) {
  const days = new Date(2016, a - 1, b).getDay();
  return week[days];
}
