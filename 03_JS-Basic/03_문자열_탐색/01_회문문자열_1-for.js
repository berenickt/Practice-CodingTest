/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 '회문 문자열'이라고 함
 * 문자열이 입력되면, 해당 문자열이
 * - 회문 문자열이면 "YES",
 * - 회문 문자열이 아니면 "NO"를 출력하는 프로그램
 *
 * cf. 회문을 검사할 때 대소문자를 구분하지 않음
 * @param {*} s 정수 길이 100을 넘지 않는 공백이 없는 문자
 * @returns
 * 1. 모든 문자를 소문자로 바꾸고
 *
 * 2. 문자가 짝수면
 * 2.1 양끝이 같은지 비교
 * 2.2 중간이 같은지 비교
 *
 * 3. 문자가 홀수면
 * 3.1 양끝이 같은지 비교
 * 3.2 중간이 같은지 비교
 * 3.3 정중앙은 비교할 필요X
 * -> 반만 돌면 됨
 */
function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase(); // 모든 문자를 소문자로 바꾸고
  let len = s.length;

  // 반만 순회하면서,
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return 'NO'; // 맨 앞과 맨 뒤부터 다른지 비교
  }
  return answer;
}

// s[0] !== s[5 - 0 - 1] = s[0] !== s[4]
// s[1] !== s[5 - 1 - 1] = s[1] !== s[3]

console.log(solution('goooG'));
console.log(solution('goGS'));
