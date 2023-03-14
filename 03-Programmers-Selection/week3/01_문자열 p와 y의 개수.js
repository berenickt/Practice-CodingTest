/** https://school.programmers.co.kr/learn/courses/30/lessons/12916
 * @param {+} s 대문자와 소문자가 섞여있는 문자열 s
 * @returns s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return
 */
function solution(s) {
  s = s.toLowerCase(); // 문자열 전체를 소문자로 변환
  let p = 0; // p의 개수를 카운트
  let y = 0; // y의 개수를 카운트

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'y') y++;
    else if (s[i] === 'p') p++;
  }

  return p === y;
  // p와 y의 개수가 동일하다면 true 값을 리턴
  // p와 y의 개수가 동일하지 않다면 false 값을 리턴
}

// **** forEach문
function solution2(s) {
  const check = {}; // 알파벳의 개수를 정리하는 객체
  const answer = s
    .toLowerCase()
    .split('')
    .forEach(str => {
      check[str] === undefined
        ? (check[str] = 1) // 기존에 알파벳이 없다면 1을 초기값으로 생성
        : (check[str] += 1); // 기존의 알파벳 개수를 1 증가
    });
  return check.p === check.y;
}

// **** 정규식
function solution3(s) {
  return s.match(/p/gi).length === s.match(/y/gi).length;
}
