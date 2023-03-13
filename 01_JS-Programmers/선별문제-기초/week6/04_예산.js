/** https://school.programmers.co.kr/learn/courses/30/lessons/12982
 * S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다.
 * 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다.
 * 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.
 *
 * 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다.
 * e.g. 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.
 * @param {*} d 부서별로 신청한 금액이 들어있는 배열
 * @param {*} budget 예산
 * @returns 최대 몇 개의 부서에 물품을 지원할 수 있는지
 */
function solution(d, budget) {
  const answer = [];

  // 모든 부서가 신청한 지원금에 따라 오름차순
  d.sort((a, b) => a - b);

  // 부서들이 신청한 금액의 총 합
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];

    if (sum <= budget) {
      answer.push(d[i]);
    }
  }
  return answer.length;
}

/**
 * while
 */
function solution2(d, budget) {
  // 모든 부서가 신청한 지원금에 따라 오름차순
  d.sort((a, b) => a - b);

  let answer = 0;
  while (budget - d[answer] >= 0) {
    budget -= d[answer];
    answer++;
  }
  return answer;
}

/**
 * filter
 */
function solution3(d, budget) {
  const answer = d
    .sort((a, b) => a - b)
    .filter(money => {
      // 총 예산에서 지원금 차감
      budget -= money;

      return budget >= 0;
    });
  return answer.length;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4
