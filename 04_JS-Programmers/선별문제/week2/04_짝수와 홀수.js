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
