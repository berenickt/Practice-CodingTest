/** https://school.programmers.co.kr/learn/courses/30/lessons/12950
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 * 이중 For문을 사용하여 각 행과 열을 더하기
 */
function solution(arr1, arr2) {
  let answer = [];

  // 행 순회
  for (let i = 0; i < arr1.length; i++) {
    let row = [];

    // 열 순회
    for (let j = 0; j < arr1[0].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(row);
  }

  return answer;
}

/** forEach문
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
function solution2(arr1, arr2) {
  const answer = [];
  arr1.forEach((row, rowIndex) => {
    answer.push(row.map((col, colIndex) => col + arr2[rowIndex][colIndex]));
  });
  return answer;
}

/** map을 이용하는 방법
 * @param {*} A
 * @param {*} B
 * @returns
 * 2차원 배열이기 때문에 반복문이 두 번 필요합니다. map을 두 번 연달아 쓰면 됩니다.
 * map을 쓰는 이유는 1,2가 4,6으로, 2,3이 7,9로 1대1로 바뀌기 때문
 */
function sumMatrix(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}

console.log(
  sumMatrix(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
