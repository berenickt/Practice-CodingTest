/** https://school.programmers.co.kr/learn/courses/30/lessons/12928
 *
 * @param {*} num
 * @returns
 * 1. 약수를 구할 때 1부터 n 까지 나눠보고,
 * 2. 나머지가 0으로 나누어 떨어지면 약수
 */
function solution(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(5));
