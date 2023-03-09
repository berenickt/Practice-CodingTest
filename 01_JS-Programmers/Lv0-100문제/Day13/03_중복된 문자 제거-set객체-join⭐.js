/** https://school.programmers.co.kr/learn/courses/30/lessons/120888
 * @param {*} my_string 문자열
 * @returns `my_string`에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열
 * Set : 순서X, 중복도 불가능
 * join('') : 모든 요소를 연결해 하나의 문자열로
 */
function solution(my_string) {
  return [...new Set(my_string)].join('');
}

console.log('people'); // "peol"
console.log('We are the world'); // "We arthwold"
