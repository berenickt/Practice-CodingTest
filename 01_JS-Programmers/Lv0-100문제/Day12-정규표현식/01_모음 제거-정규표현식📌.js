/** https://school.programmers.co.kr/learn/courses/30/lessons/120849
 * 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류
 * @param {*} my_string 문자열
 * @returns 모음을 제거한 문자열
 * e.g. "bus"에서 모음 u를 제거한 "bs"를 return
 */

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}
