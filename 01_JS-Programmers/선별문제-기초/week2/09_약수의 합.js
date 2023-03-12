/** https://school.programmers.co.kr/learn/courses/30/lessons/12928
 * @param {*} n 정수
 * @returns n의 약수를 모두 더한 값
 *
 * e.g. 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28
 * e.g. 5의 약수는 1, 5입니다. 이를 모두 더하면 6
 */
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}
