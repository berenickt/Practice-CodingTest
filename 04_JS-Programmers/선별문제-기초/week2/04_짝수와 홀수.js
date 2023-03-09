/** https://school.programmers.co.kr/learn/courses/30/lessons/12937
 * 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수
 */
function solution(num) {
  let answer = '';

  if (num % 2 === 0) {
    // 짝수 : 나머지 값이 0일 경우
    answer = 'Even';
  } else {
    // 홀수 : 나머지 값이 1일 경우
    answer = 'Odd';
  }

  return answer;
}

function solution2(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}
