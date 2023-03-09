/** https://school.programmers.co.kr/learn/courses/30/lessons/120825
 * @param {*} my_string 문자열
 * @param {*} n 정수
 * @returns my_string에 들어있는 각 문자를 `n`만큼 반복한 문자열
 */
function solution(my_string, n) {
  return [...my_string].map((char) => char.repeat(n)).join('');
}
console.log(solution('hello', 3)); // hhheeellllllooo
