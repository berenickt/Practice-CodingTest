/** https://school.programmers.co.kr/learn/courses/30/lessons/120834
 * @param {*} age
 * @returns PROGRAMMER-962식 나이
 */
function solution(age) {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  // (입력받은 숫자를 문자 배열로).(arr를 순회하면서 대응).(문자열 합치기)
  return [...age.toString()].map((str) => arr[str]).join('');
}

console.log(solution(23));
