/** https://school.programmers.co.kr/learn/courses/30/lessons/120840
 * @param {*} balls
 * @param {*} share
 * @returns
 * round : 입력값을 반올림한 수와 가장 가까운 정수 값을 반환
 */
function solution(balls, share) {
  return Math.round(factorial(balls) / factorial(balls - share) / factorial(share));
}

// 1! = 1
// 2! = 2 x 1! = 2
// 3! = 3 x 2! = 6
const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));

console.log(solution(3, 2));
// x1/2 === %2
