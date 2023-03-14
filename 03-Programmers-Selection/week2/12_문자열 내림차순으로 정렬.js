/** https://school.programmers.co.kr/learn/courses/30/lessons/12917
 * @param {*} s 문자열, s는 영문 대소문자로만 구성
 * @returns 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴
 * cf. 대문자는 소문자보다 작은 것으로 간주
 * e.g. "Zbcdefg" => "gfedcbZ"
 */
function solution(s) {
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    answer.push(s[i]);
  }
  answer.sort((a, b) => {
    return a > b ? -1 : 1;
  });

  return answer.join('');
}

function solution2(s) {
  const answer = s
    .split('')
    .sort((a, b) => {
      return a > b ? -1 : 1;
    })
    .join('');
  return answer;
}

function solution3(s) {
  return s.split('').sort().reverse().join('');
}
