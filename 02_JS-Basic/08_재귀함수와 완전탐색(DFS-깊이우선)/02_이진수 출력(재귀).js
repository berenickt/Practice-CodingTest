/**
 * 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램
 * cf. 단 재귀함수를 이용해서 출력
 * @param {*} n  10진수 N(1<=N<=1,000
 * @returns
 */
function solution(n) {
  let answer = '';
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
