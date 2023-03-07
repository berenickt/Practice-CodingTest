/** https://school.programmers.co.kr/learn/courses/30/lessons/12918
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수
 * e.g. s가 "a234"이면 False
 * e.g. s가 "1234"라면 True
 * @param {*} s
 * @returns
 * 1. 문자열의 길이가 4 또는 6이고 숫자로만 구성되어 있는지 확인
 * 2. 숫자로만 되어있는지(AND), 길이가 4 또는(OR) 6인지를 확인
 */
function solution(s) {
  let parseInts = parseInt(s);
  if (s.length == 4 || s.length == 6) {
    if (s == parseInts) {
      return true;
    }
  }
  return false;
}

function solution2(s) {
  // 길이가 4 혹은 6이 아니면 false 반환
  if (s.length !== 4 && s.length !== 6) return false;

  // 각 자리중에 숫자가 아닌 것이 하나라도 있으면 false 반환
  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i]))) return false;
  }

  // 위의 모든 조건에 포함되지 않으면
  // (길이가 4 혹은 6이고, 숫자로만 구성되어 있으면) true 반환
  return true;
}

// **** 정규식
function solution3(s) {
  return s.search(/\D/g) < 0 && (s.length === 4 || s.length === 6);
}

console.log(solution('a234'));
