/** https://school.programmers.co.kr/learn/courses/30/lessons/120822
 * @param {*} my_string 문자열
 * @returns  my_string을 거꾸로 뒤집은 문자열
 */
function solution(my_string) {
  // (입력받은 문자열).(문자열로 나누고).(뒤집고).(모든 요소를 연결해 하나의 문자열로)
  return my_string.split('').reverse().join('');
}
console.log(solution('jaron'));
