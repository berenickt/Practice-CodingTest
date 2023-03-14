/** https://school.programmers.co.kr/learn/courses/30/lessons/12944
 * 정수를 담고 있는 배열 arr의 평균값을 return하는 함수
 * @param {*} arr
 * @returns
 */
function solution(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    // sum += arr[i]
  }
  return sum / arr.length;
  // 총합에서 배열의 길이 만큼 나눠주면 평균값
}

function solution2(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
