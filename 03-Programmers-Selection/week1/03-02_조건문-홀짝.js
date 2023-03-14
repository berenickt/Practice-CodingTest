/**
 * 입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만들려고 합니다.
 * 입력된 값이 "짝수"이면 "Even", "홀수"이면 "Odd", 0이면 "Zero"라는 문구를 띄워주세요.
 */
function evenOdd(num) {
  if (num === 0) {
    console.log('Zero');
  } else if (num % 2 === 0) {
    // 어떠한 숫자를 2로 나눴을 때 나누어 떨어지는 경우 = 짝수
    console.log('Even');
  } else if (num % 2 === 1) {
    // 어떠한 숫자를 2로 나눴을 때 나누어 떨어지지 않는 경우 = 홀수
    console.log('Odd');
  }
}

evenOdd(12); // "Even"
evenOdd(15); // "Odd"
evenOdd(0); // "Zero"
