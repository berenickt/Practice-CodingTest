/** https://school.programmers.co.kr/learn/courses/30/lessons/12930
 *
 * @param {*} s
 * @returns
 * 1. 단어의 짝수번째 문자는 대문자로, 홀수번째 문자는 소문자로
 * e.g. try hello world는 TrY HeLlO WoRlD
 * split map join 삼단콤보(split-apply-combine 기법)로 해결가능
 */
function solution(s) {
  return s
    .split(' ') // 공백 기준으로 배열
    .map(
      (word) =>
        word
          // 각 배열의 요소마다 문자열 단위로 쪼개고
          .split('')
          .map((char, index) =>
            // 인덱스가 짝수인 경우
            index % 2 === 0 //
              ? word[index].toUpperCase()
              : word[index].toLowerCase()
          )
          .join('') // 문자열 단위를 다시 합치기
    )
    .join(' '); // 공백 기준으로 다시 합치기
}
// **** 정규식으로 푸는 법
// \w : word를 표현하며 알파벳 + 숫자 + _ 중의 한 문자임을 의미
function solution2(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}

console.log(solution('try hello world'));
