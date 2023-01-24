/**
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아
 * 대문자는 소문자로, 소문자는 대문자로 변환하여 출력하는 프로그램
 * cf. 문자열의 길이는 100을 넘지 않음
 * @param {*} s 문자열
 * @returns 대문자는 소문자로, 소문자는 대문자로 변환
 */
function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}

console.log(solution('StuDY'));
