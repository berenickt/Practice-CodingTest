const filter = 'qwertyuiopasdfghjklzxcvbnm1234567890-_.';

/** https://school.programmers.co.kr/learn/courses/30/lessons/72410
 * 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때,
 * 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램
 *
 * - 아이디의 길이는 3자 이상 15자 이하여야 합니다.
 * - 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
 * - 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
 *
 * 7단계의 순차적인 처리 과정을 통해 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞는지 검사하고
 * 규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고 합니다.
 * @param {*} new_id 신규 유저가 입력한 아이디
 * @returns 7단계 규칙에 맞게 변형되어 추천되는 아이디
 */
function solution(new_id) {
  // 1단계 : 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계 : 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 제외한 모든 문자를 제거
  let answer = '';
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) {
      answer += new_id[i];
    }
  }

  // 3단계 : 마침표(.)가 2번 이상 연속된다면, 하나의 마침표로 치환
  while (answer.includes('..')) {
    answer = answer.replace('..', '.');
  }

  // 4단계 : 마침표(.)가 처음이나 끝에 위치한다면 제거
  if (answer[0] === '.') {
    answer = answer.substring(1);
  }

  function removeLastDot() {
    if (answer[answer.length - 1] === '.') {
      answer = answer.substring(0, answer.length - 1);
    }
  }
  removeLastDot();

  // 5단계 : 빈 문자열이라면, "a"를 대입한다.
  if (answer.length === 0) {
    // if( answer === "" )
    answer = 'a';
  }

  // 6단계 : 길이가 16자 이상일 때 15자까지 제거한다.
  //        제거 후에, 마침표가 끝에 위치한다면 마침표를 제거
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
    removeLastDot();
  }

  // 7단계 : 문자열 길이가 2글자 이하라면, 마지막 글자를 3글자가 될 때까지 반복해서 붙인다.
  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer[answer.length - 1]);
  }
  return answer;
}

/**
 *  filter
 */
function solution2(new_id) {
  // 1단계 : 대문자를 소문자로 치환
  new_id = new_id.toLowerCase().split('');

  // 2단계 : 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 제외한 모든 문자를 제거
  let answer = new_id.filter(str => {
    return filter.includes(str);
  });

  // 3단계 : 마침표(.)가 2번 이상 연속된다면, 하나의 마침표로 치환
  answer = answer.filter((str, i) => {
    return str !== '.' || (str === '.' && answer[i + 1] !== '.');
  });

  // 4단계 : 마침표(.)가 처음이나 끝에 위치한다면 제거
  if (answer[0] === '.') {
    answer = answer.slice(1);
  }

  function removeLastDot() {
    if (answer[answer.length - 1] === '.') {
      answer = answer.slice(0, answer.length - 1);
    }
  }
  removeLastDot();

  // 5단계 : 빈 문자열이라면, "a"를 대입한다.
  if (answer.length === 0) {
    // answer.push( "a" );
    answer = ['a'];
  }

  // 6단계 : 길이가 16자 이상일 때 15자까지 제거한다.
  //        제거 후에, 마침표가 끝에 위치한다면 마침표를 제거
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    removeLastDot();
  }

  // 7단계 : 문자열 길이가 2글자 이하라면, 마지막 글자를 3글자가 될 때까지 반복해서 붙인다.
  if (answer.length <= 2) {
    const add = new Array(3 - answer.length).fill(answer[answer.length - 1]);
    answer = answer.concat(add); // answer = [...answer, ...add]
  }
  return answer.join('');
}
