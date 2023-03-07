function solution(board, moves) {
  let answer = 0;
  const length = board.length;
  let basket = [];
  moves.forEach((move) => {
    for (let i = 0; i < length; i++) {
      const item = board[i][move - 1];
      if (item !== 0) {
        if (basket[basket.length - 1] !== item) {
          basket.push(item);
        } else {
          basket.pop();
          answer += 2;
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });
  return answer;
}

function solution2(board, moves) {
  let n = board.length;

  // 격자의 세로줄이 하나의 배열이 되도록 2차원 배열 방향 변경
  board = board.flat();
  let rotatedBoard = Array.from({ length: n }, (i) => []);
  for (let i = 0; i < board.length; i++) {
    if (board[i]) rotatedBoard[i % n].push(board[i]);
  }

  // moves 배열 순회하며 인형 꺼내서 stack에 집어넣기
  let stack = [];
  let cnt = 0;
  for (let move of moves) {
    let doll = rotatedBoard[move - 1].shift();
    if (doll === undefined) continue;
    if (stack[stack.length - 1] === doll) {
      stack.pop();
      cnt += 2;
    } else {
      stack.push(doll);
    }
  }

  return cnt;
}
