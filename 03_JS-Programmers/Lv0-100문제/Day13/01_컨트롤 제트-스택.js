/** https://school.programmers.co.kr/learn/courses/30/lessons/120853
 * 숫자들이 공백으로 구분된 문자열이 주어집니다.
 * 문자열에 있는 숫자를 차례대로 더하려고 합니다.
 * 이 때 “Z”가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻
 *
 * @param {*} s 숫자와 “Z”로 이루어진 문자열
 * @returns 머쓱이가 구한 값
 */
function solution(s) {
  const stack = [];

  // 공백 기준으로 값을 배열로 받아온 것을 순회
  for (const num of s.split(' ')) {
    if (num === 'Z') {
      stack.pop();
    } else {
      stack.push(+num);
    }
  }
  return stack.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution('1 2 Z 3')); // 4
console.log(solution('10 20 30 40')); // 100
console.log(solution('10 Z 20 Z 1')); // 1
