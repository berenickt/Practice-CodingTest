/** https://school.programmers.co.kr/learn/courses/30/lessons/1844
 * BFS
 * @param {*} maps 게임 맵의 상태, n x m 크기의 2차원 배열
 * // 0과 1로만 구성되며, 0은 벽, 1은 길을 의미
 * @returns 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최소값
 * // 상대 팀 진영에 도착할 수 없을 때는 -1 return
 */

function solution(maps) {
  const xLen = maps.length; // maps의 행
  const yLen = maps[0].length; // maps의 열

  // 상하좌우로 이동하기에 상하좌우로 이동할 시의 칸수
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const BFS = () => {
    // BFS에 사용할 queue를 생성
    // 처음 시작은 무조건 가장 좌측의 가장 상단에서 시작하므로 0, 0 좌표와 이동한 칸 수 까지 해서 [0, 0, 1]
    const queue = [[0, 0, 1]];

    // while문을 사용해 BFS를 시작
    while (queue.length) {
      // 현재 위치, 현재까지 이동한 칸 수를 queue에서 빼오면서
      // 현재의 위치가 도착지점의 좌표와 같으면 현재까지 이동한 칸 수를 그대로 반환
      const [x, y, count] = queue.shift();
      if (x === xLen - 1 && y === yLen - 1) {
        return count;
      }
      if (maps[x][y]) {
        maps[x][y] = 0;
        dx.forEach((dx, i) => {
          const nx = x + dx;
          const ny = y + dy[i];
          if (nx >= 0 && nx < xLen && ny >= 0 && ny < yLen && maps[nx][ny]) {
            queue.push([nx, ny, count + 1]);
          }
        });
      }
    }
    return -1;
  };
  return BFS();
}
