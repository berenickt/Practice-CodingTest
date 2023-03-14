/**
 * 5*5 격자판이 그림과 같이 숫자가 적혀있습니다.
 * [10, 13, 10, 12, 15],
 * [12, 39, 30, 23, 11],
 * [11, 25, 50, 53, 15],
 * [19, 27, 29, 37, 27],
 * [19, 13, 30, 13, 19],
 * (cf. 이미지 파일)
 *
 * N*N의 격자판이 주어지면,
 * 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력하는 프로그램
 *
 * cf. arr[행][열]
 * cf. 각 자연수는 100을 넘지 않음
 * @param {*} arr 5*5의 2차원 배열 정보
 * @returns
 */
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER; // 비교군의 기준이 될 가장 작은 값을 초기화
  let raw = 0;
  let column = 0;

  // **** (1) 행과 열 중에 가장 큰 값을 구하기
  for (let i = 0; i < arr.length; i++) {
    // 한 행과 열을 돌 때마다 0으로 초기화
    let raw = 0;
    let column = 0;

    // ** 행(가로)으로 왼쪽에서 오른쪽으로 한 행씩 더해줌
    // 10 + 13 + 10 + 12 + 15(1행 끝) => 115 => 행의 index 0번째로 초기화
    // 12 + 30 + 30 + 23 + 11(2행 끝) => 154 => 행의 index 0번째로 초기화, ... 행을 다 돌 때까지 반복
    for (let j = 0; j < arr.length; j++) {
      raw += arr[i][j];
      column += arr[j][i];
    }
    answer = Math.max(answer, raw, column);
  }

  // **** (2) 왼쪽 대각선과 오른쪽 대각선 중에 가장 큰 값을 구하기
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    // 배열의 0 번째부터 시작하는 열과 행이 만나는 지점(arr[i][i])만 돌며 더해줌
    // e.g. arr[0][0], arr[1][1], arr[2][2] ... => 10 + 39 + 50 + 37 + 19(diagonal 끝)
    leftDiagonal += arr[i][i];

    // 배열의 i번째의 가장 끝 대척점 부터 시작하는 열과 행이 만나는 지점(arr[i][arr.length - i - 1])만 돌며 더해줌
    // e.g. arr[0][5-0-1], arr[1][5-1-1], arr[2][5-2-1] ... => 15 + 23 + 50 + 27 + 19(reDiagonal 끝) => 134
    rightDiagonal += arr[i][arr.length - i - 1];
  }

  answer = Math.max(answer, leftDiagonal, rightDiagonal);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
