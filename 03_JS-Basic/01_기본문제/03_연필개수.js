/**
 * 연필 1다스는 12자루
 * 학생 1인당 연필을 1자루씩 나누어 준다고 할 때,
 * N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성
 * @param {*} n  1000 이하의 자연수 N이 입력
 * @returns
 * e.g.
 * 1. 25명이 있으면 1다스(12)로 나누고,
 * 2. 몫 2와 나머지 1을 더하면 필요한 다스(3)을 얻을 수 있음
 */
function solution(n) {
  let answer;

  // ** ceil() : 2.xx면 3으로 올림
  // 1. 입력된 인원수를 1다스(12)로 나누고, 나머지를 올림
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(178));
