/**
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램
 * @param {*} arr 7개의 수가 들어있는 배열
 * @returns 그 숫자 중 가장 작은 수
 */
function solution(arr) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER; // 가장 큰 수로 초기화

  for (let i = 0; i < arr.length; i++) {
    // 첫 번쨰 숫자는 min에 무조건 들어감
    // 이후 앞에 숫자보다 큰지 작은지에 따라 비교
    if (arr[i] < min) min = arr[i];
  }

  answer = min;
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
