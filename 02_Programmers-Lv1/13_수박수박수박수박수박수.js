/** https://school.programmers.co.kr/learn/courses/30/lessons/12922
 * 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수
 * e.g. n이 4이면 "수박수박"을 리턴하
 * e.g. n이 3이면 "수박수"를 리턴
 * @param {*} n
 * @returns
 *
 * 1. 문자열을 n만큼 반복
 * 2. 개수만큼 자르기
 */
function solution(n) {
  return '수박'.repeat(n).substring(0, n);
}

console.log(solution(3));
console.log(solution(4));
