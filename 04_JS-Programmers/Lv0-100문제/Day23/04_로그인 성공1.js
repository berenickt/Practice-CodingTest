/** https://school.programmers.co.kr/learn/courses/30/lessons/120883
 * @param {*} id_pw 머쓱이가 입력한 아이디와 패스워드가 담긴 배열
 * @param {*} db 회원들의 정보가 담긴 2차원 배열
 * @returns  로그인 성공, 실패에 따른 메시지
 */
function solution(id_pw, db) {
  let result = '';

  //2중 for문을 사용하지 않으려고 map으로 했다 !
  //뭔가 조건문을 더 줄일수 있을 것 같은데,, 어떻게 줄일 수 있을지 싱크빅이 안떠오른다.. 힇희...
  db.map((item, i) => {
    if (id_pw[0] === item[0] && id_pw[1] === item[1]) result = 'login';
    else if (id_pw[0] === item[0] && id_pw[1] !== item[1]) result = 'wrong pw';
    else if (id_pw[0] !== item[0] && id_pw[1] !== item[1]) result = 'fail';
  });

  return result;
}

// `db`에 같은 정보의 계정이 있으므로 "login"을 return
console.log(
  solution(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ]
  )
); // "login"

console.log(
  solution(
    ['programmer01', '15789'],
    [
      ['programmer02', '111111'],
      ['programmer00', '134'],
      ['programmer01', '1145'],
    ]
  )
); // "wrong pw"

console.log(
  solution(
    ['rabbit04', '98761'],
    [
      ['jaja11', '98761'],
      ['krong0313', '29440'],
      ['rabbit00', '111333'],
    ]
  )
); // "fail"
