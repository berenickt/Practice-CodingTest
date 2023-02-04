/**
 * 알파벳 대문자로 이루어진 문자열을 입력받아
 * 같은 문자가 연속으로 반복되는 경우
 * 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램
 *
 * cf. 반복횟수가 1인 경우 생략
 *
 * e.g. 입력 KKHSSSSSSSE
 * e.g. 출력 K2HS7E
 *
 * @param {*} string 문자열, 문자열의 길이는 100을 넘지 않음
 * @returns 반복되는 문자옆에 반복횟수가 있는 문자열
 */
function solution(string) {
  let answer = '';
  let count = 1; // 중복 숫자를 카운트를 당을 변수
  string = string + ' '; // 맨 마지막 문자와의 비교를 위해 맨뒤에 빈문자열 추가

  // **** 맨뒤에 빈문자를 추가해서 순회할 때는 맨 뒤의 앞까지만 순회
  for (let i = 0; i < string.length - 1; i++) {
    // console.log(string[i]); // K K H S S S S S S S E 빈문자열
    if (string[i] === string[i + 1]) count++; // 앞뒤 문자가 같으면
    else {
      answer += string[i];
      if (count > 1) answer += String(count); // 중복 카운트를 문자열에 붙여주기
      count = 1; // 중복 문자가 끝나면 다시 카운트 초기화
    }
  }
  // return answer;
}

console.log(solution('KKHSSSSSSSE'));
