/**
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램
 * @param {*} n 20이하의 자연수 N이 입력
 * @returns
 */
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}

console.log(solution(10));
