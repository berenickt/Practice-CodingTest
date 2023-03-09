/** https://school.programmers.co.kr/learn/courses/30/lessons/120910
 * 어떤 세균은 1시간에 두배만큼 증식한다고 합니다
 * @param {*} n 처음 세균의 마리수
 * @param {*} t 경과한 시간
 * @returns t시간 후 세균의 수
 */
function solution(n, t) {
  return n * 2 ** t;
}

// 처음엔 2마리, 1시간 후엔 4마리, 2시간 후엔 8마리, ..., 10시간 후엔 2048마리가 됩니다
console.log(solution(2, 10)); // 2048
console.log(solution(7, 15)); // 229,376
