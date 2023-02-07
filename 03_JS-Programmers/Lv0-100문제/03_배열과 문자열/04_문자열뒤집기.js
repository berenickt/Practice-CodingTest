/** https://school.programmers.co.kr/learn/courses/30/lessons/120822
 * @param {*} my_string 문자열
 * @returns 거꾸로 뒤집은 문자열
 */
function solution(my_string) {
  return my_string.split('').reverse().join('');
}
console.log(solution('jaron'));
