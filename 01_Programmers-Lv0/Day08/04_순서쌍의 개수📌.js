/** https://school.programmers.co.kr/learn/courses/30/lessons/120836
 *
 * @param {*} n 자연수
 * @returns 두 숫자의 곱이 n인 자연수 순서쌍의 개수
 */
function solution(n) {
  let answer = 0;

  // 나눴을 떄 나머지가 0이면, 곱이 n의 순서쌍 개수
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) answer++;
    console.log(n % i);
  }

  return answer;
}

console.log(solution(20)); // 6
// 20 % 1 = 0
// 20 % 2 = 0
// 20 % 3 = 2
// 20 % 4 = 0
// 20 % 5 = 0
// 20 % 6 = 2
// 20 % 7 = 6
// 20 % 8 = 4
// 20 % 9 = 2
// 20 % 10 = 0
