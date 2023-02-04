/**
 * 자연수 N을 입력하면 N!값을 구하세요.
 * N! = n*(n-1)*(n-2)*.....*2*1입니다.
 * 만약 N=5라면 5! = 5 * 4 * 3 * 2 * 1 = 12
 * @param {*} n 자연수 N(3<=n<=10)
 * @returns
 */
function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
}

console.log(solution(5));
