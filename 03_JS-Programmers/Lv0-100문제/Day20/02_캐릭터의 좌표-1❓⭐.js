/** https://school.programmers.co.kr/learn/courses/30/lessons/120861
 * @param {*} keyinput 머쓱이가 입력한 방향키의 배열
 * @param {*} board  맵의 크기
 * @returns 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]
 */
function solution(keyinput, board) {
  const moves = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };
  const [rangeX, rangeY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

  return keyinput
    .map((key) => moves[key])
    .reduce(([x, y], [mX, mY]) => (Math.abs(x + mX) > rangeX || Math.abs(y + mY) > rangeY ? [x, y] : [x + mX, y + mY]), [0, 0]);
}

console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11])); // [2, 1]
console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9])); // [0, -4]
