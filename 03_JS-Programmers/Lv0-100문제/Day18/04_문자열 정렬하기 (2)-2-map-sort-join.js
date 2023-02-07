/** https://school.programmers.co.kr/learn/courses/30/lessons/120911
 * @param {*} my_string 영어 대소문자로 이루어진 문자열
 * @returns my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열
 */
function solution(my_string) {
  return [...my_string]
    .map((char) => char.toLowerCase())
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    .join('');
}

// "Bcad"를 모두 소문자로 바꾸면 "bcad"이고 이를 알파벳 순으로 정렬하면 "abcd"
console.log(solution('Bcad')); // "abcd"
console.log(solution('heLLo')); // "ehllo"
console.log(solution('Python')); // "hnopty"
