/** https://school.programmers.co.kr/learn/courses/30/lessons/120824
 * Odd Number : 홀수 (이상한 수) e.g. odd eye : 양쪽 눈 색깔이 다른 것
 * Even Number: 짝수 (평평한 수) e.g. 짝을 가지고 있어 공평한 숫자
 * @param {*} num_list 정수 배열
 * @returns num_list의 원소 중 짝수와 홀수의 개수를 담은 배열
 */
function solution(num_list) {
  const odd = num_list.filter((a) => a % 2 === 0).length;
  const even = num_list.filter((a) => a % 2 === 1).length;
  return [odd, even];
}

console.log(solution([1, 2, 3, 4, 5]));
