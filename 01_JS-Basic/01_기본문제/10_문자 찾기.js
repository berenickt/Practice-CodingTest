/**
 * 한 개의 문자열을 입력받고,
 * 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램
 * cf. 문자열의 길이는 100을 넘지 않음
 * @param {*} s 문자열
 * @param {*} t 문자  1개
 * @returns
 */
function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));

// -----------------------------------
function solution2(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
}

let str2 = 'COMPUTERPROGRAMMING';
console.log(solution2(str2, 'R'));
