/**
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아
 * 대문자로 모두 통일하여 문자열을 출력하는 프로그램
 * @param {*} s
 * @returns 대문자로 모두 통일한 문자열
 */
function solution(s) {
  let answer = "";

  for (let x of s) {
    let num = x.charCodeAt();
    // if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }

  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
