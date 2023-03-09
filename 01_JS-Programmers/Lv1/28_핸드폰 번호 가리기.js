/** https://school.programmers.co.kr/learn/courses/30/lessons/12948
 *
 * @param {*} phone_number
 * @returns
 *
 * - 전화번호 뒷 4자리를 빼고 나머지를 전부 *로 바꾸는 문제
 * 1. 뒷 네자리를 떼내고
 * 2. 앞은 다 *로 바꾼 뒤
 * 3. 2개를 다시 붙이기
 */
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

function solution2(s) {
  return s.replace(/\d(?=\d{4})/g, '*');
}
