/** https://school.programmers.co.kr/learn/courses/30/lessons/12954
 * @param {*} x 정수
 * @param {*} n 자연수
 * @returns x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트
 */
function solution(x, n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}

function solution2(x, n) {
  const answer = new Array(n).fill(1).map((num, i) => {
    return (num + i) * x;
  });
  return answer;
}

function solution3(x, n) {
  return Array.from(Array(n), (_, index) => x * (index + 1));
}
