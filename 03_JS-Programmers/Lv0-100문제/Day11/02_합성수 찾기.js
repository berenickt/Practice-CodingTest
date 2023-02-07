/** https://school.programmers.co.kr/learn/courses/30/lessons/120846
 * 약수의 개수가 세 개 이상인 수를 합성수
 * @param {*} n 자연수
 * @returns `n`이하의 합성수의 개수
 */
function solution(n) {
  // 소수 판별 (제곱근까지만 확인하는 법)
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return true; // 소수가 아니라면 true
    }
    return false; // 소수라면 false
  };

  let count = 0;

  // n까지 순회하면서
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) count += 1; // 소수가 아니라면 1증가
  }

  return count;
}

console.log(solution(10)); // 4, 6, 8, 9, 10 으로 5개
console.log(solution(15)); // 4, 6, 8, 9, 10, 12, 14, 15 로 8개
