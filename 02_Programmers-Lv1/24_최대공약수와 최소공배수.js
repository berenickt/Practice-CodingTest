/** https://school.programmers.co.kr/learn/courses/30/lessons/12940
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수
 * 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환
 *
 * e.g. 자연수 3과 12의 최대공약수는 3, 최소공배수는 12이므로 [3, 12]를  return
 * e.g. 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 return
 * @param {*} n
 * @param {*} m
 * @returns
 *
 * 푸는 방법
 * 1. 최대공약수를 구하는 유클리드 호제법
 * 2. 두 수의 곱은 최대공약수와 최소공배수의 곱과 같다
 */
function solution(n, m) {
  function u(n, m) {
    return m % n ? u(m % n, n) : n;
  }
  const gcd = u(n, m);
  return [gcd, (n * m) / gcd];
}

function solution2(n, m) {
  // 최대공약수 : 두 수 A와 B의 공통된 약수 중에 가장 큰 정수
  // - 가장 쉬운 방법은 2부터 min(A, B)까지 모든 정수로 나누어보는 방법
  let gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m));

  // 최소공배수 : 두 수, 혹은 그 이상의 여러 수의 공통인 배수 중 가장 작은 수
  // - 각각의 두 수를 lcm으로 나누었을 때 나머지 값이 0인지를 비교
  let lcm = (n, m) => (n * m) / gcd(n, m);

  return [gcd(n, m), lcm(n, m)];
}

function solution3(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b)); // 최대 공약수
  const lcm = (a, b) => (a * b) / gcd(a, b); // 최소 공배수
  return [gcd(num1, num2), lcm(num1, num2)];
}

console.log(solution(3, 12));
