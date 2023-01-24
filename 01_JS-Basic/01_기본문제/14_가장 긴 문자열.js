/**
 * N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램
 * cf. 문자열의 길이는 100을 넘지 않음
 * cf. 각 문자열 길이는 서로 다름
 * @param {*} s 3 <= n <= 30인 문자열
 * @returns 가장 긴 문자열
 */
function solution(s) {
  let answer = '',
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
