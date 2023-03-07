/*** 36과 24의 최대공약수 구하기
 * 1. 큰 수를 작은 수로 나눔 → `36 % 24 == 12`
 * 2. 나눴던 수를 나머지로 나눔 → `24 % 12 == 0`
 * 3. 반복
 * 4. 나머지가 0이 됐을 때, 나누는 수로 사용된 12가 36과 24의 최대공약수가 됨
 */

/*** 36과 24의 최소공배수 구하기
 * 주어진 자연수 2개를 곱하고 최대공약수로 나누어 최소공배수
 * 1. `36 * 24 / 최대공약수 = 최소공배수`
 */

function solution(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b)); // 최대 공약수
  const lcm = (a, b) => (a * b) / gcd(a, b); // 최소 공배수
  return [gcd(num1, num2), lcm(num1, num2)];
}
