/** https://school.programmers.co.kr/learn/courses/30/lessons/12910
 * @param {*} arr 자연수를 담은 배열
 * @param {*} divisor 자연수
 * @returns array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열
 * - divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환
 */
function solution(arr, divisor) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

// **** filter 사용
function solution(arr, divisor) {
  const answer = arr.filter(num => num % divisor === 0);

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
// console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
// console.log(solution([3, 2, 6], 10)); // [-1]
