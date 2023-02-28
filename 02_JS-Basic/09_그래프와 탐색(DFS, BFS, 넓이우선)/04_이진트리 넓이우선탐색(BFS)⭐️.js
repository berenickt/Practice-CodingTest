/**
 * 참고 그림의 이진트리를 넓이우선 탐색하기 (BFS)
 * 넓이 우선 탐색 : 1 2 3 4 5 6 7
 * @returns
 */
function solution() {
  let answer = "";
  let queue = [];
  queue.push(1); // 루트 노드

  // 큐의 길이만큼 순회
  while (queue.length) {
    console.log(queue);

    // 큐의 맨 앞에서 노드를 꺼내오기
    let node = queue.shift();

    answer += node + " ";

    // (왼쪽, 오른쪽)
    for (let nextNode of [node * 2, node * 2 + 1]) {
      if (nextNode > 7) continue; // 7 이상이면, 넘어가기
      queue.push(nextNode); // 왼쪽, 오른쪽 이동
    }
  }

  return answer;
}

console.log(solution()); // 1 2 3 4 5 6 7
// [ 1 ] - 루트 노트 넣기
// [ 2, 3 ] - 1과 연결된 노드를 다 넣기
// [ 3, 4, 5 ] - 2를 방문해서 빼고, 2와 연결된 노드(4, 5) 넣기
// [ 4, 5, 6, 7 ] - 3을 방문해서 빼고, 3과 연결된 노드(6, 7) 넣기
// [ 5, 6, 7 ] - 4를 방문해서 빼고, 4와 연결된 노드가 탐색하는데 없음
// [ 6, 7 ] - 5를 방문해서 빼고, 5와 연결된 노드가 탐색하는데 없음
// [ 7 ] - - 6을 방문해서 빼고, 6과 연결된 노드가 탐색하는데 없음
