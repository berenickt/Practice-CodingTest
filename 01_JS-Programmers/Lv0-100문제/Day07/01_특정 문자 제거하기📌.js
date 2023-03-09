/** https://school.programmers.co.kr/learn/courses/30/lessons/120826
 * @param {*} my_string 문자열
 * @param {*} letter 문자
 * @returns `my_string`에서 `letter`를 제거한 문자열
 */
function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}

console.log(solution('abcdef', 'f'));
