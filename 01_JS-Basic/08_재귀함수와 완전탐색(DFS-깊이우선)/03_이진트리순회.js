/**
 * 그림과 같은 이진트리의 전위순회, 후위 순회 연습
 * @param {*} n
 * @returns
 */
function solution(n) {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + ' ';
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
