/** https://school.programmers.co.kr/learn/courses/30/lessons/120885
 * 이진수를 의미하는 두 개의 문자열
 * @param {*} bin1
 * @param {*} bin2
 * @returns 두 이진수의 합
 */
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}
