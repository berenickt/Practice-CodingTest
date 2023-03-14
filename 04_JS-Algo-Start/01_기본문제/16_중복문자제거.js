/**
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램
 * cf. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력
 * cf. 문자열의 길이는 100을 넘지 않습니다
 * @param {*} s 문자열
 * @returns
 */
function solution(s) {
  let answer = '';
  // ** indexOf : 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환, 존재하지 않으면 -1
  // console.log(s.indexOf("k"));
  // console.log(s.indexOf("Z"));

  for (let i = 0; i < s.length; i++) {
    // console.log(s[i], i, s.indexOf(s[i])); // 문자한개, 인덱스, 인덱스의 위치
    // 중복된 문자가 있으면 s.indexOf(s[i]는 0이 됨
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}

console.log(solution('ksekkset')); // kset

// 숫자로 중복 숫자의 개수 찾기 -------------------------------------------------------
function solution2(s) {
  let answer = 0;
  let position = s.indexOf('k');

  while (position !== -1) {
    answer++;
    position = s.indexOf('k', position + 1);
  }

  return answer;
}

console.log(solution2('ksekkset')); // 3
