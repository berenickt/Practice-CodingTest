/**
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램
 * cf. 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력
 * cf. 문자열의 길이는 100을 넘지 않음
 * @param {*} s 문자열
 * @returns
 */
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  // if(s.length%2===1) answer=s.substr(mid, 1);
  // else answer=s.substr(mid-1, 2);
  return answer;
}
console.log(solution('study'));
