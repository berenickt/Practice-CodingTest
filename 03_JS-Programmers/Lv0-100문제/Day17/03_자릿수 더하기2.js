/** https://school.programmers.co.kr/learn/courses/30/lessons/120906
 * @param {*} n 정수
 * @returns n의 각 자리 숫자의 합
 */
function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(solution(1234)); // 10
console.log(solution(930211)); // 16
