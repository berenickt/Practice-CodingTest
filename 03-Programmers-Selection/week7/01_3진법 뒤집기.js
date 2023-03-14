/** https://school.programmers.co.kr/learn/courses/30/lessons/68935
 * @param {*} n 자연수
 * @returns n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수
 */
function solution(n) {
  // 3진법으로 변환
  n = n.toString(3);

  let reverse = '';
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  // 3진법으로 변환된 데이터를 10진법으로 변환
  return parseInt(reverse, 3);
}

function solution2(n) {
  n = n.toString(3).split('').reverse().join('');

  return parseInt(n, 3);
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
