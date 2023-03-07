/** https://school.programmers.co.kr/learn/courses/30/lessons/120887
 * 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다.
 * @param {*} i
 * @param {*} j
 * @param {*} k
 * @returns `i`부터 `j`까지 `k`가 몇 번 등장하는지
 */
function solution(i, j, k) {
  let count = 0;
  for (let num = i; num <= j; num++) {
    count += [...('' + num)].filter((n) => +n === k).length;
  }
  return count;
}

console.log(solution(1, 13, 1)); // 6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0
