/** https://school.programmers.co.kr/learn/courses/30/lessons/42748
 * 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
 * @param {*} array 1차원 배열
 * @param {*} commands [i, j, k]를 원소로 가진 2차원 배열
 * @returns commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return
 *
 * e.g. array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3 이면
 * 1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]
 * 2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]
 * 3. 2에서 나온 배열의 3번째 숫자는 5
 */
function solution(array, commands) {
  const answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0]; // 2, 4, 1
    const j = commands[idx][1]; // 5, 4, 7
    const k = commands[idx][2]; // 3, 1, 3

    // console.log(array.slice(i - 1, j)); // i=2, j=5이면, [5, 2, 6, 3]
    const result = array.slice(i - 1, j).sort((a, b) => {
      return a - b;
    });
    answer.push(result[k - 1]);
  }

  return answer;
}

function solution2(array, commands) {
  const answer = commands.map(el => {
    const result = array.slice(el[0] - 1, el[1]).sort((a, b) => a - b);

    return result[el[2] - 1];
  });

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
); // [5, 6, 3]
