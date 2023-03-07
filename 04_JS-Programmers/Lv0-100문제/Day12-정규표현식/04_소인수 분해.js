/** https://school.programmers.co.kr/learn/courses/30/lessons/120852
 * 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것
 *
 * e.g. 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있음
 * 따라서 12의 소인수는 2와 3
 * @param {*} n 자연수
 * @returns n의 소인수를 오름차순으로 담은 배열
 */
function solution(n) {
  const answer = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) answer.push(i);
  }
  return answer;
}
// 12 % 2 = 0
// 12 % 3 = 0
// 12 % 4 = 0
// 12 % 5 = 2

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // 해당 수로 나눠떨어지면 소수가 아님
  }
  return true;
}

console.log(solution(12));
