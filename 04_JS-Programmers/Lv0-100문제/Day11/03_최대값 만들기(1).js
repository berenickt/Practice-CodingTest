/** https://school.programmers.co.kr/learn/courses/30/lessons/120847
 * @param {*} numbers 정수 배열
 * @returns numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값
 * 1. 내림차순
 * 2. 맨 앞의 2개 곱셈
 */
function solution(numbers) {
  const [first, second, ...rest] = numbers.sort((a, b) => b - a);
  return first * second;
}
