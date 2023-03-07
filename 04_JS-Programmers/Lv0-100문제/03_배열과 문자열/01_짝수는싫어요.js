/** https://school.programmers.co.kr/learn/courses/30/lessons/120813
 * @param {*} n
 * @returns // n 이하의 홀수가 오름차순으로 담긴 배열
 */
function solution(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 1) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(solution(10)); // [1, 3, 5, 7, 9]
console.log(solution(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
