/** https://school.programmers.co.kr/learn/courses/30/lessons/120924
 * @param {*} common 등차수열 혹은 등비수열
 * @returns 마지막 원소 다음으로 올 숫자
 */
function solution(common) {
  if (common[2] - common[1] === common[1] - common[0]) {
    // 4 + 2 - 1 = 5
    return common[common.length - 1] + common[1] - common[0];
  } else {
    // 8 * (4 - 2) = 16
    return common[common.length - 1] * (common[1] / common[0]);
  }
}

console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([2, 4, 8])); // 16
