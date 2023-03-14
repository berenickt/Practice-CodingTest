/** https://school.programmers.co.kr/learn/courses/30/lessons/12932
 * 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴
 * e.g. n이 12345이면 [5,4,3,2,1]을 리턴
 * @param {*} n
 * @returns
 *
 * 문자 방법
 */
function solution(n) {
  return String(n)
    .split('') // 문자 단위로 쪼개기
    .reverse()
    .map((item) => parseInt(item)); // 모든 원소에 대해 자연수로 형 변환
}

// **** 숫자 방법
function solution(n) {
  let arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}

console.log(solution(12345));
