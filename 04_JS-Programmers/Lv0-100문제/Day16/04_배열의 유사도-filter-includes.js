/** https://school.programmers.co.kr/learn/courses/30/lessons/120903
 * 두 배열이 얼마나 유사한지 확인
 * @param {*} s1 문자열 배열
 * @param {*} s2 문자열 배열
 * @returns 같은 원소의 개수
 */
function solution(s1, s2) {
  return s1.filter((s) => s2.includes(s)).length;
}

console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c'])); // 2
console.log(solution(['n', 'omg'], ['m', 'dot'])); // 0
