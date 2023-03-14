/** https://school.programmers.co.kr/learn/courses/30/lessons/12950
 * 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
 * 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수
 * @param {*} arr1 2차원 배열
 * @param {*} arr2 2차원 배열
 * @returns 두 2차원 배열의 덧셈
 */
function solution(arr1, arr2) {
  const answer = [[]];

  // 행 순회
  for (let row = 0; row < arr1.length; row++) {
    // 열 순회
    for (let col = 0; col < arr1[row].length; col++) {
      // 각각의 행과 열 위치에 해당되는 데이터들을 더하기
      const sum = arr1[row][col] + arr2[row][col];

      // 행에 해당되는 인덱스로 접근했을 때 배열이 없을 때는 빈 배열을 생성
      if (answer[row] === undefined) {
        answer[row] = [];
      }

      // 행과 열 인덱스 값으로 해당 위치에 행과열을 더한 값을 삽입
      answer[row][col] = sum;
    }
  }
  return answer;
}

// **** map : 배열.map((요소, 인덱스, 호출할배열), this로 사용되는 값)
function solution2(arr1, arr2) {
  return arr1.map((num1, row) => {
    // console.log(num1); // [ 1, 2 ], [ 2, 3 ]
    return num1.map((num1, col) => num1 + arr2[row][col]);
  });
}

// prettier-ignore
console.log(solution([[1, 2], [2, 3],], [[3, 4],[5, 6]])); // [[4,6], [7,9]]
console.log(solution([[1], [2]], [[3], [4]])); // [[4],[6]]
// [1, 2] + [3, 4] = [4, 6]
// [2, 3]   [5, 6]   [7, 9]
