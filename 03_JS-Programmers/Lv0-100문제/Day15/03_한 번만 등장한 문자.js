/** https://school.programmers.co.kr/learn/courses/30/lessons/120896
 *
 * @param {*} s 문자열
 * @returns s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열
 * -- 한 번만 등장하는 문자가 없을 경우 빈 문자열
 */
function solution(s) {
  let res = [];
  // s만큼 반복
  for (let c of s) {
    // s의 c번쟤 인덱스 === s의 c번째 인덱스 역순
    if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  }
  return res.sort().join(''); // (알파벳순으로 정렬).(합치기)
}

// "abcabcadc"에서 하나만 등장하는 문자는 "d"
console.log(solution('abcabcadc')); // "d"
console.log(solution('abdc')); // "abcd"
console.log(solution('hello')); // "eho"
