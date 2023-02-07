/** https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * @param {Array} nums 폰켓몬 배열
 * @returns 폰켓몬 N/2마리 중 선택할 수 있는 폰켓몬 종류의 최대값
 *
 * 1. nums배열 안에 중복되는 폰켓몬들을 제거한 후
 * 2. 중복 제거한 배열의 개수 >= N/2라면 답은 N/2
 * 3. 중복 제거한 배열의 개수 <  N/2라면 답은 중복 제거한 배열의 개수
 */
function solution(nums) {
  const arr = [...new Set(nums)];
  const max = nums.length / 2;

  return arr.length > max ? max : arr.length;
}

console.log(solution([3, 1, 2, 3]));
