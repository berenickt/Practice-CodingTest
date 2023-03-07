/** https://school.programmers.co.kr/learn/courses/30/lessons/120864
 *
 * @param {*} my_string 문자열
 * cf. my_string은 소문자, 대문자, 자연수로만 구성
 * @returns my_string안의 자연수들의 합
 */
function solution(my_string) {
  const nums = my_string.match(/[0-9]+/g); // 숫자만 가져오기
  return nums ? nums.map((num) => +num).reduce((a, c) => a + c, 0) : 0;
}

console.log(solution('aAb1B2cC34oOp')); // 37
console.log(solution('1a2b3c4d123Z')); // 133
