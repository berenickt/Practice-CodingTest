/**
 * 숫자 2개와 연산자를 입력받아 알맞게 계산하는 미니계산기 함수를 만들어주세요.
 * num1과 num2는 숫자열, operator는 문자열로 입력됩니다.
 * operator "+", "/", "-", "*" 이외의 값이 들어온다면
 * "올바른 입력이 아닙니다"라는 문구를 띄워주세요.
 */
function calculator(num1, num2, operator) {
  if (operator === '+') {
    console.log(num1 + num2);
  } else if (operator === '-') {
    console.log(num1 - num2);
  } else if (operator === '*') {
    console.log(num1 * num2);
  } else if (operator === '/') {
    console.log(num1 / num2);
  } else {
    console.log('올바른 입력이 아닙니다.');
  }
}

calculator(10, 5, '+'); // 15
calculator(10, 5, '-'); // 5
calculator(10, 5, '*'); // 50
calculator(10, 5, '/'); // 2
calculator(10, 5, 'a'); // "올바른 입력이 아닙니다"
