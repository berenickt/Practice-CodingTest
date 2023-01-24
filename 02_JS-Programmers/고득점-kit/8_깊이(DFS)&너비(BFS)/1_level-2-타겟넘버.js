/** https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
 * numbers 배열을 각각 더하거나 빼서 목표하는 target 숫자 만드는 모든 경우의 수 구하기
 * @param {*} numbers 사용할 수 있는 숫자
 * @param {*} target 타겟 넘버
 * @returns
 * numbers의 각 자리의 숫자를 더하거나 빼는 경우가 2
 * 주어지는 숫자 최대 개수가 20개
 * 그 20개의 숫자에 대해 각각 2가지 경우의 수가 존재
 * 2의 20승인 100만번 정도가 최악의 경우의 수
 */
function solution(numbers, target) {
  function DFS(index, sum) {
    if (index === numbers.length) return sum === target ? 1 : 0;
    return DFS(index + 1, sum + numbers[index]) + DFS(index + 1, sum - numbers[index]);
  }
  return DFS(0, 0);
}
