/** https://school.programmers.co.kr/learn/courses/30/lessons/120897
 * @param {*} n 정수
 * @returns n의 약수를 오름차순으로 담은 배열
 */
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer.push(i);
    }
  }
  return answer;
}

console.log(solution(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
