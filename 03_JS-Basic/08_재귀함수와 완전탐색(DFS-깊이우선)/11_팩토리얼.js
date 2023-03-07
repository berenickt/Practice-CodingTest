/**
 * 자연수 N을 입력하면 N!값을 구하세요.
 * N! = n * (n-1) * (n-2) * ..... * 2 * 1입니다.
 *
 * e.g. N = 5라면 5! = 5 * 4 * 3 * 2 * 1 = 12
 * @param {*} n 3 <= n <= 10크기의 자연수 n
 * @returns n!
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

console.log(solution(5)); // 120
// DFS(5) = 5 * DFS(4) = 120
// DFS(4) = 4 * DFS(3) = 24
// DFS(3) = 3 * DFS(2) = 6
// DFS(2) = 2 * DFS(1) = 2
// DFS(1) = 1
