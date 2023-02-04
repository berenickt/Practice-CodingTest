/** 폰켓몬, https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * @param {Array} nums 각각의 폰켓몬
 * @returns
 * 폰켓몬 N/2마리 중 선택할 수 있는 폰켓몬 종류의 최대값
 * 1. nums배열 안에 중복되는 폰켓몬들을 제거한 후
 * 2. [중복 제거한 폰켓몬 수] >  [N/2]라면 답은 [N/2]
 * 3. [중복 제거한 폰켓몬 수] <  [N/2]라면 답은 [중복 제거한 폰켓몬 수]
 */
function solution(nums) {
  const max = nums.length / 2; // 최대로 가질 수 있는 폰켓몬 수
  const limit = [...new Set(nums)]; // 중복없는 폰켓몬

  // 중복없는 폰켓몬 수가 홀수면 ? max : arr.length
  return limit.length > max ? max : limit.length;
}

console.log(solution([3, 1, 2, 3])); // 2마리
console.log(solution([3, 3, 3, 2, 2, 4])); // 3마리
