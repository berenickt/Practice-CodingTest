/** https://school.programmers.co.kr/learn/courses/30/lessons/12945
 * 피보나치 수는 F(0) = 0, F(1) = 1일  때,
 * 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수
 *
 * F(2) = F(0) + F(1) = 0 + 1 = 1
 * F(3) = F(1) + F(2) = 1 + 1 = 2
 * F(4) = F(2) + F(3) = 1 + 2 = 3
 * F(5) = F(3) + F(4) = 2 + 3 = 5
 *
 * @param {*} n
 * @returns 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지
 */
function solution(n) {
  // **** 피보나치 수의 결과를 저장하는 배열
  // 0번째 인덱스는 0번째 피보나치의 결과
  // 1번째 인덱스는 1번째 피보나치의 결과
  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    // (A + B) % C === ((A % C) + (B % C)) % C
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }
  return answer[n];
}

function solution2(n) {
  let prev = 0; // 0번째 피보나치 수의 결과

  return new Array(n - 1).fill(1).reduce(acc => {
    const sum = (acc + prev) % 1234567;
    prev = acc;

    return sum;
  }, 1); // 1번째 피보나치 수의 결과를 초기값으로 넣어준다.
}
