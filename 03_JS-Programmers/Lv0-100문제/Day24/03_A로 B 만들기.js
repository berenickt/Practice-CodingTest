/** https://school.programmers.co.kr/learn/courses/30/lessons/120886
 * @param {*} before 문자열
 * @param {*} after 문자열
 * @returns before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0
 */
function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

console.log(solution('olleh', 'hello'));
