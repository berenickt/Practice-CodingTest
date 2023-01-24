/**
 * 한 개의 문자열 s와 문자 t가 주어지면,
 * 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램
 * cf. 문자는 소문자로만 주어지며, 문자열의 길이는 100문자를 넘지 않음
 * @param {*} s 문자열
 * @param {*} t 문자 1개
 * @returns
 */
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
