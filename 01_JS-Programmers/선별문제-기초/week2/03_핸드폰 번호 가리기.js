/** https://school.programmers.co.kr/learn/courses/30/lessons/12948
 *
 * @param {*} phone_number 전화번호 문자열
 * @returns 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴
 * e.g. "01033334444"이면,	"*******4444"리턴
 */
function solution(phone_number) {
  let answer = '';

  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer += '*'; // answer = answer + '*'
    } else {
      answer += phone_number[i];
      // answer = answer + phone_number[i]
    }
  }
  return answer;
}

// padStart, slice
function solution2(phone_number) {
  let answer = '';

  answer = answer.padStart(phone_number.length - 4, '*');
  answer += phone_number.slice(phone_number.length - 4);

  return answer;
}

function solution3(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

/***
 * padStart(목표문자열길이, 채워넣을 다른 문자열)
 */
