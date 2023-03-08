/**
 * 유저들이 회원가입을 할 때 형식에 맞게 올바르게 작성했는지 검증하는 함수를 만들어야 합니다.
 * 아래 조건들을 모두 만족하는 함수를 만드세요.
 *
 * 조건 1. email에는 반드시 "@"가 포함되어야 합니다.
 * 조건 2. email에 "@"가 없을 경우 "이메일 주소를 다시 확인해주세요" 문구가 나와야 합니다.
 * 조건 3. password에는 8~16자리가 들어가야 합니다. 8~16자리가 아니라면 "비밀번호는 8~16자여야 합니다." 문구가 나와야 합니다.
 * 조건 4. password와 passwordCheck는 서로 동일한 값이 입력되어야 합니다. 만약 아닐 경우 "비밀번호를 다시 확인해주세요" 라는 문구가 나와야 합니다.
 * 조건 5. 위의 4가지 조건을 모두 충족한다면 " 회원가입을 축하합니다" 라는 문구가 나와야 합니다.
 *
 * - email - 문자열
 * - password - 문자열
 * - passwordCheck - 문자열
 *
 * cf.
 * - 조건들을 자세히 살펴봐주세요.
 * - 모든 조건을 충족하지 않는다면 회원가입은 불가능합니다.
 * - 해당 함수에서는 console.log가 아닌 return을 사용하세요.
 */
function validation(email, password, passwordCheck) {
  if (email.includes('@') === false) {
    console.log('이메일 주소를 다시 확인해주세요.');
  } else if (password.length < 8 || password.length > 16) {
    console.log('비밀번호는 8~16자리여야 합니다.');
  } else if (password !== passwordCheck) {
    console.log('비밀번호를 다시 확인해주세요.');
  } else {
    console.log('회원가입을 축하합니다.');
  }
}

validation('code@naver.com', '12345678', '12345678'); // 회원가입을 축하합니다.
validation('codenaver.com', '12345678', '12345678'); // 이메일 주소를 다시 확인해주세요.
validation('code@naver.com', '1234', '1234'); // 비밀번호는 8~16자리여야 합니다.
validation('code@naver.com', '12345678', '12345679'); // 비밀번호를 다시 확인해주세요.
