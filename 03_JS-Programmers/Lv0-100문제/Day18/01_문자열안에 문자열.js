/** https://school.programmers.co.kr/learn/courses/30/lessons/120908
 *
 * @param {*} str1 문자열
 * @param {*} str2 문자열
 * @returns str1 안에 str2가 있다면 1, 없다면 2
 */
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// "ab`6CD`E443fgh22iJKlmn1o" str1에 str2가 존재하므로 1을 return
console.log(solution('ab6CDE443fgh22iJKlmn1o', '6CD')); // 1
console.log(solution('ppprrrogrammers', 'pppp')); // 2
console.log(solution('AbcAbcA', 'AAA')); // 2
