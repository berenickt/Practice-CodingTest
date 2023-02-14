/**
 * N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
 * 음의 정수는 앞쪽에, 양의정수는 뒤쪽에 있어야 한다.
 * 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.
 *
 * @param {*} array 음수를 포함한 정수가 들어있는 배열, 0은 없음
 * @returns
 *
 * 1. 음수를 배열에 다 넣기
 * 2. 양수를 배열에 다 넣기
 */
function solution(array) {
  let answer = array;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > 0 && array[j + 1] < 0) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return answer;
}

// --------------------------------------------------------
// 음수를 먼저 다 넣은 뒤에 양수를 넣기
function solution2(array) {
  let answer = [];

  // 1. 음수면, answer에 다 넣기
  for (let element of array) {
    if (element < 0) answer.push(element);
  }

  // 2. 양수면, answer에 다 넣기
  for (let element of array) {
    if (element > 0) answer.push(element);
  }
  return answer;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6])); // [-3, -2, -6, 1, 2, 3, 5, 6]
