function solution(maps) {
  let answer = -1;
  const X_LEN = maps.length; // maps의 행
  const Y_LEN = maps[0].length; // maps의 열
  const DIRECTION = [
    [1, 0], // 상
    [0, 1], // 우
    [-1, 0], // 하
    [0, -1], // 좌
  ];

  // // BFS에 사용할 queue를 생성
  const mapsQueue = [];

  maps[0][0] = 0; // 시작 위치

  // 첫 시작은 무조건 가장 좌측의 가장 상단에서 시작하므로
  // 0, 0 좌표와 이동한 칸 수 까지 해서 [0, 0, 1]
  mapsQueue.push([0, 0, 1]);

  while (mapsQueue.length > 0) {
    const [x, y, distance] = mapsQueue.shift();

    if (x === X_LEN - 1 && y === Y_LEN - 1) {
      answer = distance;
      break;
    }

    for (let i = 0; i < DIRECTION.length; i++) {
      const [nextX, nextY] = [x + DIRECTION[i][0], y + DIRECTION[i][1]];
      if (nextX < 0 || nextX >= X_LEN || nextY < 0 || nextY >= Y_LEN || maps[nextX][nextY] === 0) {
        continue;
      }

      maps[nextX][nextY] = 0;
      mapsQueue.push([nextX, nextY, distance + 1]);
    }
  }

  return answer;
}
