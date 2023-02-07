/** https://school.programmers.co.kr/learn/courses/30/lessons/120843
 * @param {*} numbers 친구들의 번호가 들어있는 정수 배열
 * @param {*} k 정수
 * @returns
 */
function solution(numbers, k) {
  // numbers[ 2 * (공 던진 횟수-1) ]
  return numbers[(2 * (k - 1)) % numbers.length];
}

console.log(solution([1, 2, 3, 4], 2));
