/**
 * 게임개발자인 "죠르디"는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
 * "죠르디"는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.
 *
 * 게임 화면은 "1 x 1" 크기의 칸들로 이루어진 "N x N" 크기의 정사각 격자이며 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다.
 * 각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다.
 * 모든 인형은 "1 x 1" 크기의 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다.
 * 게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다.
 * 집어 올린 인형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다.
 * 다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어 올려 바구니에 담은 모습입니다.
 *
 * 만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다.
 * 위 상태에서 이어서 [5번] 위치에서 인형을 집어 바구니에 쌓으면 같은 모양 인형 두 개가 없어집니다.
 *
 * 크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다.
 * 또한 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정합니다. (그림에서는 화면표시 제약으로 5칸만으로 표현하였음)
 *
 * @param {*} board 게임 화면의 격자의 상태가 담긴 2차원 배열
 * @param {*} moves 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열
 * @returns 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수
 *
 * for문
 */
function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  // 크레인이 이동하는 위치값을 순회
  for (let i = 0; i < moves.length; i++) {
    // 크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 순회, 0~4까지 행 순회
    for (let position = 0; position < board.length; position++) {
      const doll = board[position][moves[i] - 1];

      // 인형이 있는 칸이 빈칸이 아니라면
      if (doll !== 0) {
        // 방금 뽑은 인형의 위치를 빈칸으로 만들어준다.
        board[position][moves[i] - 1] = 0;

        // 바구니에 넣으려고 하는 인형과 버켓의 마지막(맨 위에 있는) 인형이 동일하면,
        if (bucket[bucket.length - 1] === doll) {
          // 사라진 인형 개수 += 2
          answer += 2;

          // **** 실제 바구니에는 넣지 않는다.
          // splice(시작인덱스, 제거할 요소의 수, 배열에 추가할 요소)
          // 뒤에 배열 요소 1개 제거 후 새 배열 반환
          // console.log(bucket.length); // 3, 2
          bucket.splice(bucket.length - 1, 1);
          // bucket.pop();
          break;
        }
        bucket.push(doll);
        break;
      }
    }
  }
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
console.log(solution(board, [1, 5, 3, 5, 1, 2, 1, 4])); // 사라진 인형 개수 === 4개

/**
 * forEach
 */
function solution2(board, moves) {
  let answer = 0;
  const bucket = [];

  moves.forEach(move => {
    // 반복문을 실행하지 않게 하는 변수
    // ( check가 false 일 때만 forEach 실행 )
    let check = false;

    board.forEach(location => {
      const doll = location[move - 1];

      if (check === false) {
        if (doll !== 0) {
          location[move - 1] = 0;

          if (bucket[bucket.length - 1] === doll) {
            answer += 2;
            bucket.splice(bucket.length - 1, 1);
          } else {
            bucket.push(doll);
          }
          check = true;
        }
      }
    });
  });
  return answer;
}
