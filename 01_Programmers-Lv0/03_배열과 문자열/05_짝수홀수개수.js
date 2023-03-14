/** https://school.programmers.co.kr/learn/courses/30/lessons/120824?language=go
 *
 * @param {*} num_list
 * @returns
 */
function solution(num_list) {
  const oddNum = 0; // 홀수
  const evenNum = 0; // 짝수

  for (const i in num_list) {
    if (num_list[i] % 2 === 0) {
      evenNum++;
    } else {
      oddNum++;
    }
  }
  return [evenNum, oddNum];
}
