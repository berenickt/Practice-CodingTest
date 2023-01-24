// 핵심 키워드는 '노드', '간선', '최단경로'
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제
function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []); // 그래프를 담을 빈 배열
  console.log(graph);

  // 간선들을 순회
  for (const [src, dest] of edge) {
    // 양방향이기 때문에 둘 다 갈 수 있도록
    graph[src].push(dest); // 원점에서 출발지를
    graph[dest].push(src); // 출발지에서 원점으로
  }

  // 각 정점의 길이를 알 수 있도록 하는 0으로 초기화된 배열 생성
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // BFS : 큐를 이용해 구현 가능
  const queue = [1];
  while (queue.length > 0) {
    // shift는 O(n)이지만 요소가 적을 경우에는 자바스크립트 엔진에서 최적화를 해줌
    const src = queue.shift();
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
