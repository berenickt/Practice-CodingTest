/** 최단거리
 * 현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다.
 * 현수의 위치와 송아지의 위치가 수직선상의 좌표 점으로 주어지면,
 * 현수는 현재 위치에서 송아지의 위치까지 다음과 같은 방법으로 이동한다.
 *
 * 송아지는 움직이지 않고 제자리에 있다.
 * 현수는 스카이 콩콩을 타고 가는데,
 * 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
 * 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램
 *
 * cf. 직선의 좌표 점은 1부터 10,000까지
 * @param {*} start 현수의 위치
 * @param {*} end 송아지의 위치
 * @returns 최소한의 점프로 송아지 위치까지 도달하는 법
 *
 * 방법 1: distance 배열 사용하는 법
 */
function solution(start, end) {
  let answer = 0;
  let check = Array.from({ length: 10001 }, () => 0);
  let distance = Array.from({ length: 10001 }, () => 0);
  let queue = [];

  queue.push(start); // 출발점을 큐에 넣기
  check[start] = 1; // 출발점이 있으니, 있다는(1) 체크하기
  distance[start] = 0; // 거리 배열 시작점(루트)를 0

  // 큐가 비어있을 떄까지 순회
  while (queue.length) {
    // x좌표에 첫 출발좌표 넣기
    let x = queue.shift();

    // 다음 Level의 노드들을 3가닥으로 순회
    for (let nextNode of [x - 1, x + 1, x + 5]) {
      // 종착점에 도착하면, 그 종착점(거리+1 = 레벨)을 리턴
      if (nextNode === end) return distance[x] + 1;

      // 0보다 크거나, 10000보다 작거나 작으면서, 체크가 0이면,
      if (nextNode > 0 && nextNode <= 10000 && check[nextNode] === 0) {
        check[nextNode] = 1; // 이동한 노드에 왔으니, 왔다고 체크
        queue.push(nextNode); // 이동한 노드를 큐에 넣기
        distance[nextNode] = distance[x] + 1; // 이동한 노드가 있는 거리배열에, 거리+1로 이동
      }
    }
  }

  return answer;
}

console.log(solution(5, 14)); // 3
console.log(solution(8, 3)); // 5
