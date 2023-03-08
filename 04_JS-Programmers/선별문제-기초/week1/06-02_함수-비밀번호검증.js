/**
 * 숫자열인 입력데이터 2개를 받아 나누기 기능을 하는 함수를 만들어야 합니다.
 * - 표현식, 선언식, 화살표 함수로 모두 만들줄 알아야 합니다.
 * - 함수의 이름과 입력데이터는 자유롭게 지어도 됩니다.
 */
const validation = (password1, password2) => {
  password1 = password1.toLowerCase();
  password2 = password2.toLowerCase();

  if (password1.length < 8 || password1.length > 16) {
    console.log('비밀번호는 8~16 자리여야 합니다');
  } else if (password1 !== password2) {
    console.log('비밀번호를 다시 확인해주세요');
  } else {
    console.log('회원가입을 축하합니다');
  }
};

let password1 = 'a1B2c3D4';
let password2 = 'A1b2C3d4';
validation(password1, password2); // true

// let password1 = "1234"
// let password2 = "1234"
// validation(password1, password2) // "비밀번호는 8~16자리여야 합니다"

// let password1 = "12345678"
// let password2 = "12345679"
// validation(password1, password2) // "비밀번호를 다시 확인해주세요"
