/** https://school.programmers.co.kr/learn/courses/30/lessons/12934
 * 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
 * n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
 * n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수
 *
 * e.g. 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 return
 * e.g. 3은 양의 정수의 제곱이 아니므로, -1을 return
 * @param {*} n
 * @returns
 */
function solution(n) {
  // n이 정수라면 ? n+1의 제곱 반환 : -1
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

function solution(n) {
  // n의 제곱근값을 x에 저장
  let x = Math.sqrt(n);

  // x가 정수이면 x+1의 제곱 반환, x가 정수가 아니면 -1 반환
  return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
}

console.log(solution(121)); // 144
console.log(solution(3)); // -1
