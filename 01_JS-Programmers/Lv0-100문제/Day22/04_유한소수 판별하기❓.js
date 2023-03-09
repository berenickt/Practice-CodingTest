/** https://school.programmers.co.kr/learn/courses/30/lessons/120878
 * 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다
 * 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다.
 * 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.
 * 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
 *
 * @param {*} a 정수
 * @param {*} b 정수
 * @returns a/b가 유한소수이면 1을, 무한소수라면 2
 */
function solution(a, b) {
  return (a / b).toString().length > 10 ? 2 : 1;
  // return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
}
console.log(solution(7, 20)); // 1
console.log(solution(11, 22)); // 1
console.log(solution(12, 21)); // 2

// **** toFixed()
// 숫자를 고정 소수점 표기법(fixed-point notation)으로 표시
// let numObj = 12345.6789;

// console.log(numObj.toFixed()); // 12346
// console.log(numObj.toFixed(1)); // 12345.7
// console.log(numObj.toFixed(10)); // 12345.6789000000
