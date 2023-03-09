/** https://school.programmers.co.kr/learn/courses/30/lessons/12982
 * @param {Array} d // 각 부서에 신청한 금액 배열
 * @param {number} budget // 예산
 * @returns // 최대 물품 지원할 수 있는 부서 수
 *
 * 정해진 예산으로 최대 몇 개의 부서의 물품을 구매할 수 있는지
 * 정해진 예산을 꼭 다 써야하는 것은 아님
 * 적은 금액부터 지원해주면 최대한 많은 부서의 물품 구매가 가능
 * 1. 부서 배열 d를 오름차순 정렬
 * 2. 적음 금액부터 금액 합치기 -> 합친 금액이 예산보다 많아지기 전까지만
 * 3. 주어진 예산보다 많아질 시 break
 */
function solution(d, budget) {
  let answer = 0; // 최대 물품 지원할 수 있는 부서 수
  d.sort((a, b) => a - b); // 오름차순

  for (const department of d) {
    // 주어진 예산보다 많아질 시 break
    if (budget < department) break;
    answer += 1;
    budget -= department;
  }
  return answer;
}
