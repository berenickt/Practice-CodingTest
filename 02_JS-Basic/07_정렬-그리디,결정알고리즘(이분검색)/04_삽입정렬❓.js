/**
 * N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램
 * 정렬하는 방법은 삽입정렬
 * @param {*} arr 자연수 N(1<=N<=100)이 여러 개 들어있는 배열
 * @returns
 */
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

// -----------------------------------------
function solution2(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (arr[i] < answer[j]) {
        answer.splice(j, 0, arr[i]);
        break;
      }
    }
  }
  return answer;
}

let arr2 = [11, 7, 5, 6, 10, 9];
console.log(solution2(arr2));
