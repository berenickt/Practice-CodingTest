/** https://school.programmers.co.kr/learn/courses/30/lessons/12930
 * @param {*} s 문자열 s는 한 개 이상의 단어로 구성, 각 단어는 하나 이상의 공백문자로 구분
 * @returns 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴
 *
 * cf. 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단
 * e.g. "try hello world"  ->	"TrY HeLlO WoRlD"
 */
function solution(s) {
  let answer = '';

  let idx = 0; // 단어별로 인덱스 값을 저장하는 역할
  for (let i = 0; i < s.length; i++) {
    // 공백이면, 그냥 공백을 넣어준다. (예외처리)
    if (s[i] === ' ') {
      answer += ' ';
      idx = 0; // idx 를 0으로 초기화
    } else {
      answer +=
        idx % 2 === 0
          ? s[i].toUpperCase() // 짝수 인덱스라면 대문자 추가
          : s[i].toLowerCase(); // 홀수 인덱스라면 소문자 추가
      idx++;
    }
  }

  return answer;
}

// **** map
function solution2(s) {
  // 공백을 기준으로 쪼개서 배열에 저장 (단어를 기준으로)
  return s
    .split(' ')
    .map(word => {
      word
        .split('')
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join('');
      // 하나의 문자열로 (붙어서) 만들어 준다.
    })
    .join(' ');
  // 공백을 기준으로 (띄어서) 문자열을 만들어 준다.
}
