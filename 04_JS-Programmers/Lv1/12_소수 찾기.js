// 소수 판별하는 함수
function isPrime(x) {
  // n 제곱근 후 올림
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

/** https://school.programmers.co.kr/learn/courses/30/lessons/42839
 * 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수
 * cf. 소수는 1과 자기 자신으로만 나누어지는 수를 의미
 * cf. 1은 소수가 아닙니다
 * e.g. 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환
 * @param {*} n
 * @returns
 */
function solution(n) {
  let answer = 0; // 소수의 개수를 저장

  // 1은 소수가 아니므로 2부터 n까지 순회
  for (let i = 2; i <= n; i++) {
    // 소수이면 소수의 개수에 1 추가
    if (isPrime(i)) answer++;
  }
  return answer;
}
