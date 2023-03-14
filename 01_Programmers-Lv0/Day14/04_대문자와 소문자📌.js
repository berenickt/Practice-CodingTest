/** https://school.programmers.co.kr/learn/courses/30/lessons/120893
 * @param {*} my_string 문자열
 * @returns 대문자는 소문자로, 소문자는 대문자로 변환한 문자열
 */
function solution(my_string) {
  // (문자를 받아서).(순회하면서 각 요소가 대문자와 같다면 ? 소문자로 : 대문자로).(문자합치기)
  return [...my_string].map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())).join('');
}
