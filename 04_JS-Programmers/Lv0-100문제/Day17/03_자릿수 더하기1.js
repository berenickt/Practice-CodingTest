/** https://school.programmers.co.kr/learn/courses/30/lessons/120906
 * @param {*} n 정수
 * @returns n의 각 자리 숫자의 합
 */
function solution(n) {
  console.log([...('' + n)].map((num) => +num));
  // (문자 단위로 나누고).(배열을 만들고).(더하기)
  return [...('' + n)].map((num) => +num).reduce((a, c) => a + c, 0);
}

console.log(solution(1234)); // 10
console.log(solution(930211)); // 16
