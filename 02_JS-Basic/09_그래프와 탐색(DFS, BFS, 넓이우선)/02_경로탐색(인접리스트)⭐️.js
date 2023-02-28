/**
 * 방향 그래프가 주어지면, 1번 정점에서 goalVertex번 정점으로 가는 모든 경로의 가지수를 출력하는 프로그램
 * @param {*} goalVertex 목표로 하는 정점, ( 1 <= goalVertex <= 20 )
 * @param {*} arr 정점이 연결된 정보가 들어있는 2차원 배열
 * @returns 총 가지 수
 *
 * cf. 인접 행렬은 구현이 쉽지만, 노드의 개수만큼 배열을 할당해야 하므로 메모리에 큰 낭비가 된다.
 * 인접 리스트는 구현이 행렬에 비해 다소 어렵지만,
 * 주어진 연결 노드만을 가지고 있기 때문에 메모리에서 큰 장점
 */
function solution(goalVertex, arr) {
  let answer = 0;

  // 목표정점 수만큼 초기화된 빈 2차원배열 초기화
  let graph = Array.from(Array(goalVertex + 1), () => Array());

  // 정점 방문 여부 체크 배열
  let check = Array.from({ length: goalVertex + 1 }, () => 0);

  // let path = []; // ** 경로 확인용

  // 2차원 배열 탐색하면서, 정점번호(a) 행에다가 이동가능한정점(b)값 넣기
  for (let [a, b] of arr) graph[a].push(b);

  function DFS(vertex) {
    // 정점이 목표정점에 도착하면, 경우의 수++
    if (vertex === goalVertex) {
      answer++;
      // console.log(path); // ** 경로 확인용
    } else {
      // 각 행의 길이만큼 순회
      for (let nv of graph[vertex]) {
        // 체크가 되어있지 않으면,
        if (check[nv] === 0) {
          // path.push(nv); // ** 경로 확인용
          check[nv] = 1; // 방문했으니 체크(1)
          DFS(nv);
          check[nv] = 0; // 다시 위로 올라갈 떄, 체크 풀어주기
          // path.pop(); // ** 경로 확인용
        }
      }
    }
  }
  check[1] = 1;
  // path.push(1); // ** 경로 확인용, 출발점
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
