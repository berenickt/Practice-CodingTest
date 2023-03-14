/** https://school.programmers.co.kr/learn/courses/30/lessons/120861
 * @param {*} keyinput 머쓱이가 입력한 방향키의 배열
 * @param {*} board  맵의 크기
 * @returns 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]
 */
function solution(keyinput, board) {
  let res = [0, 0];
  for (let p of keyinput) {
    switch (p) {
      case 'left':
        if (-res[0] < board[0] / 2 - 1) res[0]--;
        break;
      case 'right':
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case 'up':
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case 'down':
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }
  return res;
}

console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11])); // [2, 1]
console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9])); // [0, -4]
