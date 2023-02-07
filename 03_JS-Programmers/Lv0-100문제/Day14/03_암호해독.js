/** https://school.programmers.co.kr/learn/courses/30/lessons/120892
 * 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
 * - 암호화된 문자열 cipher를 주고받습니다.
 * - 그 문자열에서 code의 배수 번째 글자만 진짜 암호
 *
 * @param {*} cipher 암호화된 문자열
 * @param {*} code 정수
 * @returns 해독된 암호 문자열
 */
function solution(cipher, code) {
  return cipher
    .split('')
    .filter((_, index) => (index + 1) % code === 0)
    .join('');
}

console.log(solution('dfjardstddetckdaccccdegk', 4)); // attack
console.log(solution('pfqallllabwaoclk', 2)); // fallback
