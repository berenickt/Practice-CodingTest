/** https://school.programmers.co.kr/learn/courses/30/lessons/120854
 * @param {*} strlist 문자열 배열
 * @returns strlist 각 원소의 길이를 담은 배열
 */
function solution(strlist) {
  return strlist.map((element) => element.length);
}

console.log(solution(['We', 'are', 'the', 'world!'])); // [2, 3, 3, 6]
console.log(solution(['I', 'Love', 'Programmers.'])); // [1, 4, 12]
