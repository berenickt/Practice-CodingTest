/** https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
 * numbers 배열을 각각 더하거나 빼서 목표하는 target 숫자 만드는 모든 경우의 수 구하기
 * @param {*} numbers 사용할 수 있는 숫자
 * @param {*} target 타겟 넘버
 * @returns target 숫자 만드는 모든 경우의 수
 * numbers의 각 자리의 숫자를 더하거나 빼는 경우가 2
 * 주어지는 숫자 최대 개수가 20개
 * 그 20개의 숫자에 대해 각각 2가지 경우의 수가 존재
 * 2의 20승인 100만번 정도가 최악의 경우의 수
 */
function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  DFS(0, 0); //함수 호출 (0번째 숫자, 현재까지 합계 0)
  return answer;

  // numbers의 인덱스와 현재까지의 합계
  function DFS(index, sum) {
    // **** 1. 탈출 조건
    // numbers의 인덱스를 모두 탐색했다면
    if (index === length) {
      // 현재까지의 합계가 target이면 answer++
      if (target === sum) {
        answer++;
      }
      return;
    }

    // **** 2. 수행동작
    // 모든 숫자가 (+)인 경우를 모두 탐색한 뒤
    // 다음 인덱스의 숫자가 (-)인 경우를 탐색
    DFS(index + 1, sum + numbers[index]);
    DFS(index + 1, sum - numbers[index]);
  }
}

console.log(solution([1, 1, 1, 1, 1], 3));
