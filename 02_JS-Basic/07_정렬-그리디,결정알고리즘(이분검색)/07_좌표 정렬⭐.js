/**
 * N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램
 * 정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬
 *
 * @param {*} arr N개의 좌표가 x, y 순으로 주어짐, x, y값은 양수만 입력
 * @returns N개의 좌표를 정렬
 *
 * 1. x좌표 기준 오름차순
 * 2. x좌표가 같다면, y좌표를 기준으로 오름차순
 */

function solution(arr) {
  let answer = arr;

  // 1. x좌표 기준 오름차순
  arr.sort((a, b) => {
    // 2. x좌표가 같다면, y좌표를 기준으로 오름차순
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return answer;
}

let arr = [
  [2, 7], // 4
  [1, 3], // 2
  [1, 2], // 1
  [2, 5], // 3
  [3, 6], // 5
];
console.log(solution(arr)); // [ [ 1, 2 ], [ 1, 3 ], [ 2, 5 ], [ 2, 7 ], [ 3, 6 ] ]
