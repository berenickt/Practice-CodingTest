/** https://school.programmers.co.kr/learn/courses/30/lessons/120862
 * @param {*} numbers 정수 배열
 * @returns numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값
 */
function solution(numbers) {
  const sorted = numbers.sort((a, b) => a - b); // 오름차순
  // 최대값(맨 앞에 2개 요소를 곱한 값, 맨 뒤에서 2개 요소를 곱한 값)
  return Math.max(sorted[0] * sorted[1], sorted[sorted.length - 1] * sorted[sorted.length - 2]);
}

console.log(solution([1, 2, -3, 4, -5])); // 두 수의 곱중 최댓값은 -3 * -5 = 15
console.log(solution([0, -31, 24, 10, 1, 9])); // 240
console.log(solution([10, 20, 30, 5, 5, 20, 5])); // 600
