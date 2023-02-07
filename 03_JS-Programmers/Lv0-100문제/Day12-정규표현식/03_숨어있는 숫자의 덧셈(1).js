/** https://school.programmers.co.kr/learn/courses/30/lessons/120851
 *
 * @param {*} my_string 문자열
 * @returns my_string 안의 모든 자연수들의 합
 */
function solution(my_string) {
  return my_string
    .match(/[0-9]/g) // 숫자만 찾아서
    .reduce((acc, cur) => acc + +cur, 0); // 숫자 다 더하기
}

console.log(solution('aAb1B2cC34oOp')); // 1 + 2 + 3 + 4 = 10
