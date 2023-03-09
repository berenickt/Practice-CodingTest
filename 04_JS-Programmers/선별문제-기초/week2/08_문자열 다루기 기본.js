/** https://school.programmers.co.kr/learn/courses/30/lessons/12918
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수
 * for 반복문
 */
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      return false;
    }
  }
  return true;
}

// **** split, filter
function solution2(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  const answer = s.split('').filter((num) => {
    // 데이터가 숫자가 아닌 문자타입만 남긴다.
    // NaN 값인 데이터만 남긴다.
    return isNaN(num);
  });
  return answer.length === 0;
}
