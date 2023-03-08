/**
 * 회원가입을 하는 사람들에게 본인 인증을 위한 인증번호를 만들려고 합니다.
 * 함수를 실행할 때마다 4자리의 랜덤 숫자가 나올 수 있도록 만들어 주세요.
 *
 * cf.
 * - 코드를 입력후 random() 을 이용하면 4자리의 랜덤 숫자가 나와야 합니다.
 * - random() 객체를 이용해야 합니다.
 */
function random() {
  console.log(String(Math.floor(Math.random() * 10000)).padStart(4, '0'));
}

console.log(Math.random()); // 0.8640927760936303
console.log(Math.random() * 10000); // 6361.8920053851925
console.log(String(Math.floor(Math.random() * 10000)).padStart(4, '0')); // 4649
// ^ 맨 앞자리가 0이 나오는 경우 3글자로 출력되는걸 막기위해, 맨 앞에 0나오면 0표시하기 위해서

// cf. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
'abc'.padStart(8, '0'); // "00000abc"

random(); // 실행할떄마다 랜덤숫자 4자리가 생성됨
