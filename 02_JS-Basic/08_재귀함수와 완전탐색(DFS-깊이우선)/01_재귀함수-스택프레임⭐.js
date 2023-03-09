/**
 * 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램
 * @param {*} num - 3 <= N <= 10 의 정수
 *
 * 재귀호출 : 자기가 자신을 호출하는 것
 */
function solution(num) {
  function DFS(level) {
    if (level === 0) return;
    else {
      DFS(level - 1);
      console.log(level);
    }
  }
  DFS(num);
}

solution(3); // 1 2 3

// DFS(3)
//   ↓
// DFS(2)
//   ↓
// DFS(1)
//   ↓
// DFS(0)
