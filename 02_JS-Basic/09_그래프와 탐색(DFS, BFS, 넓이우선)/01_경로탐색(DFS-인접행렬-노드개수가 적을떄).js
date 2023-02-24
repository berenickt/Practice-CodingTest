/**
 * 방향 그래프가 주어지면, 1번 정점에서 goalVertex번 정점으로 가는 모든 경로의 가지수를 출력하는 프로그램
 * @param {*} goalVertex 목표로 하는 정점, ( 1 <= vertextCnt <= 20 )
 * @param {*} arr 정점이 연결된 정보가 들어있는 2차원 배열
 * @returns 총 가지 수
 */
function solution(goalVertex, arr) {
  let answer = 0;
  // 목표정점 수만큼 0으로 초기화된 2차원배열 초기화
  let graph = Array.from(Array(goalVertex + 1), () => Array(goalVertex + 1).fill(0));

  // 정점 방문 여부 체크 배열
  let check = Array.from({ length: goalVertex + 1 }, () => 0);
  // let path = []; // ** 경로 확인용

  // 2차원 배열 탐색하면서, 해당 행열 위치에 1넣기
  for (let [a, b] of arr) graph[a][b] = 1;

  function DFS(vertex) {
    // 정점이 목표정점에 도착하면, 경우의 수++
    if (vertex === goalVertex) {
      answer++;
      // console.log(path); // ** 경로 확인용
    } else {
      for (let index = 1; index <= goalVertex; index++) {
        // 해당 행열 위치가 1이거나, 방문하지 않았다면
        if (graph[vertex][index] === 1 && check[index] === 0) {
          check[index] = 1; // 방문했으니 체크(1)
          // path.push(index); // ** 경로 확인용
          DFS(index); // 해당 index 정점으로 이동S
          check[index] = 0; // 다시 위로 올라갈 떄, 체크 풀어주기
          // path.pop(); // ** 경로 확인용
        }
      }
    }
  }
  path.push(1); // ** 경로 확인용, 출발점
  check[1] = 1; // 출발점(1)은 무조건 체크
  DFS(1);
  return answer;
}

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
); // 6

// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 5 ]
// [ 1, 3, 4, 2, 5 ]
// [ 1, 3, 4, 5 ]
// [ 1, 4, 2, 5 ]
// [ 1, 4, 5 ]
// 6
