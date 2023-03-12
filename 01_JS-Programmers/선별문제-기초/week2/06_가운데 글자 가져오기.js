/** https://school.programmers.co.kr/learn/courses/30/lessons/12903
 * 단어 s의 가운데 글자를 반환하는 함수
 */
function solution(s) {
  let center = Math.floor(s.length / 2);
  let answer = s[center];

  if (s.length % 2 === 0) {
    // 짝수일 경우 가운데 2글자를 가져온다.
    answer = s[center - 1] + answer;
  }
  return answer;
}

function solution2(s) {
  const center = Math.floor(s.length / 2);
  const answer = s.length % 2 === 1 ? s.slice(center, center + 1) : s.slice(center - 1, center + 1);
  return answer;
}

function solution3(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
