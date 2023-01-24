/**
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램
 * cf. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력
 * cf. 문자열의 길이는 100을 넘지 않습니다
 * @param {*} s 문자열
 * @returns
 */
function solution(s) {
  let answer = '';
  //console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution('ksekkset'));
