/**
 * 1부터 N까지 번호가 적힌 구슬이 있습니다.
 * 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램
 * @param {*} n 자연수 N ( 3 <= N <= 10)
 * @param {*} m 자연수 M ( 2 <= N <= N)
 * @returns 첫 번째 줄에 결과를 출력
 * - 맨 마지막 총 경우의 수를 출력
 * - 출력순서는 사전순으로 오름차순으로 출력
 */
function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
