/**https://school.programmers.co.kr/learn/courses/30/lessons/120809?language=javascript
 * @param {*} numbers 정수 배열
 * @returns 각 원소에 두배한 원소를 가진 배열
 */
function solution(numbers) {
  return numbers.map((number) => number * 2);
}
console.log(solution([1, 2, 3, 4, 5]));
