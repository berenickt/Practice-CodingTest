/** 폰켓몬
 * https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * @param {*} nums
 * @returns
 * N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법
 * - 4마리의 폰켓몬 중 2마리를 고르는 방법
 * - 최대한 다양한 종류의 폰켓몬을 가져야 함
 */
function solution(nums) {
  const max = nums.length / 2; // 내가 최대로 가질 수 있는 폰켓몬 수
  const arr = [...new Set(nums)]; // 중복 요소가 없는 폰켓몬

  return arr.length > max ? max : arr.length;
}

console.log(solution([3, 1, 2, 3]));
