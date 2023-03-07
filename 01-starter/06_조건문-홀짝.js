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
