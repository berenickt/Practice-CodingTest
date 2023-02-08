/**
 * N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
 * 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다.
 * 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.
 *
 * @param {*} arr 첫 줄에 정수 N(5<=N<=100)이 있고
 * - 2번쨰 줄부터 음수를 포함한 정수가 들어있는 배열
 * - cf. 0은 입력되지 않음
 * @returns
 */
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

// --------------------------------------------------------
function solution2(arr) {
  let answer = [];
  for (let x of arr) {
    if (x < 0) answer.push(x);
  }
  for (let x of arr) {
    if (x > 0) answer.push(x);
  }
  return answer;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6])); // [-3, -2, -6, 1, 2, 3, 5, 6]
