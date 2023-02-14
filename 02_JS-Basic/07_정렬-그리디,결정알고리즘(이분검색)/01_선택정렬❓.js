/**
 * N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램
 * 정렬하는 방법은 선택정렬
 *
 * @param {*} arr 자연수 N(1<=N<=100)이 여러 개 들어있는 배열
 * @returns
 *
 * ** 선택정렬 알고리즘(Selection Sort)
 * 1. 가장 작은 값을 탐색
 * 2. 그 값을 정렬이 안된 배열의 맨 앞에 위치한 값과 교체
 *
 * 1.
 */
function solution(arr) {
  let answer = arr;

  // 크기만큼 순회
  for (let i = 0; i < arr.length; i++) {
    let index = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) index = j;
    }
    [arr[i], arr[index]] = [arr[index], arr[i]]; // 서로 바꾸기
    console.log(`${i}회전: ${arr}`);
  }
  return answer;
}

console.log(solution([13, 5, 11, 7, 23, 15])); // [ 5, 7, 11, 13, 15, 23 ]
