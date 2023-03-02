/**
 * n*n의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다.
 * 각 섬은 1로 표시되어, 상하좌우가 대각선으로 연결되어 있으며, 0은 바다입니다.
 * 섬나라 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램
 *
 * 1. 대각선까지 포함해서 상우하좌 8방향이 0인지 확인해야 함
 * 2. 이동한 곳에는 체크해야 함
 *
 * @param {*} board n*n의 섬나라 아일랜드 2차원 지도
 * @returns 섬나라 아일랜드에 존재하는 섬
 *
 */
function solution(board) {
  let answer = 0;
  let n = board.length;

  // 상 상우 우 우하 하 좌하 좌 좌상 방향, (시계 방향, direction)
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  // 출발 지점(x, y)
  function DFS(x, y) {
    board[x][y] = 0; // 방문한 곳은 0으로 해줘야 다시 뒤로 안돌아감

    // 8방향으로 순회(시계방향으로 순회)
    for (let direction = 0; direction < 8; direction++) {
      let nextX = x + dx[direction];
      let nextY = y + dy[direction];

      // 이동할 수 있는 경우이면,
      // 다음행이 0보다 크거나 같거나, 지도행 길이보다 작거나, 다음열이 0보다 크거나 같거나, 지도열 길이보다 작거나, 땅인 경우
      if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < n && board[nextX][nextY] === 1) {
        console.log(nextX, nextY); // 행 열, 섬 크기만큼 순회하고, 다음 섬에서 또 순회
        DFS(nextX, nextY);
      }
    }
  }

  // board 2차원 순회
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 1(섬)을 발견하면,
      if (board[i][j] === 1) {
        board[i][j] = 0; // 방문한 곳은 0으로 해줘야 다시 뒤로 안돌아감
        answer++; // 섬 개수++
        console.log(i, j);
        DFS(i, j);
        console.log('DFS end, 1개의 섬 순회 완료');
      }
    }
  }
  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
