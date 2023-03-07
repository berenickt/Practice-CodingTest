/** https://school.programmers.co.kr/learn/courses/30/lessons/12912
 * 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수
 * @param {*} a
 * @param {*} b
 * @returns
 *
 * cf. 가우스의 등차수열의 합
 * 가우스 방식(가우스가 1부터 100까지를 순식간에 더했던 일화)을 사용
 * 양쪽 두 수를 더한 것에, 두 수 사이의 숫자 수 + 1을 곱하고 나누기 2를 하는 게 가우스 방식
 */
function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

// for문으로 푸는 법
function solution2(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

console.log(solution(3, 5));
