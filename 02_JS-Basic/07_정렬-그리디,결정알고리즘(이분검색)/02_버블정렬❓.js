/**
 * N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램
 * 정렬하는 방법은 버블정렬
 * @param {*} arr 자연수 N(1<=N<=100)이 여러 개 들어있는 배열
 * @returns
 */
function solution(arr) {
  let answer = arr; // 얕은 복사

  // 순회
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // 바꾸기
      }
    }
  }

  return answer;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
