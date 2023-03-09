/**
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램
 * cf. 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력
 * cf. 문자열의 길이는 100을 넘지 않음
 * @param {*} s 문자열
 * @returns
 */
function solution(s) {
  let answer;
  // ** middle의 약자, mid
  let mid = Math.floor(s.length / 2); // 단어를 2로 나눈 몫

  // ** substring : string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환
  // ** 7을 2로 나누면 3 -> 정가운데를 가리킴

  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1); // 단어의 길이가 홀수라면, mid만 뽑기
  else answer = s.substring(mid - 1, mid + 1); // 단어의 길이가 짝수라면, mid 2개 뽑기

  // ** substr : 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환,
  // - 사용 권장 X, https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr
  // if (s.length % 2 === 1) answer = s.substr(mid, 1);
  // else answer = s.substr(mid - 1, 2);

  return answer;
}
console.log(solution("study"));
console.log(solution("good"));
