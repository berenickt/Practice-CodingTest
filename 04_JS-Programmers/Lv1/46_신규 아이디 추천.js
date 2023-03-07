/** https://school.programmers.co.kr/learn/courses/30/lessons/72410
 * 1. 정규표현식을 활용해서 각각의 단계마다 특정 조건을 만족하는 문자열을 replace로 교체
 * @param {*} new_id // 유저가 입력한 아이디
 * @returns // 규칙에 맞는 아이디 추천
 */
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15)
    .replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
