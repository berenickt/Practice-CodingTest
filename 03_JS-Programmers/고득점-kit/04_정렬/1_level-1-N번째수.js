/** https://school.programmers.co.kr/learn/courses/30/lessons/42748
 *
 * @param {*} array
 * @param {*} commands
 * @returns
 *
 * commands를 여러 command로 분리하고
 * array를 특정 구간 command[0],command[1] 사이로 자른 후,
 * 정렬하여,
 * command[2] 위치를 출력
 */
function solution(array, commands) {
  return commands.map((v) => array.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1]);
}

function solution2(array, commands) {
  return commands.map((cmd) => {
    const arrCmd = array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => a - b);
    return arrCmd[cmd[2] - 1];
  });
}
