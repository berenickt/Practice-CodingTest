/** https://school.programmers.co.kr/learn/courses/30/lessons/120902
 * my_string은 "3 + 5"처럼 문자열로 된 수식
 *
 * @param {*} my_string 문자열
 * @returns 수식을 계산한 값
 *
 * eval : 문자로 표현된 JavaScript 코드를 실행하는 함수
 */
function solution(my_string) {
  return eval(my_string);
}

console.log(solution('3 + 4')); // 7
