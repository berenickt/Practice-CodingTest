/** https://school.programmers.co.kr/learn/courses/30/lessons/12925
 * 문자열 s를 숫자로 변환한 결과를 반환하는 함수
 * e.g. str이 "1234"이면 1234를 반환
 * e.g. str이 "-1234"이면 -1234를 반환
 *
 * @param {*} s
 * @returns
 */
function solution(s) {
  return parseInt(s);
  // return Number(s);
}

console.log(solution('-1234'));
