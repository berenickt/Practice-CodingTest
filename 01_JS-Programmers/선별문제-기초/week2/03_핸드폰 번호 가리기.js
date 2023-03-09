/** https://school.programmers.co.kr/learn/courses/30/lessons/12948
 *
 * @param {*} phone_number
 * @returns
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
