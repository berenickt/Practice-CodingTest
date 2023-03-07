/** https://school.programmers.co.kr/learn/courses/30/lessons/12926
 * 아스키모드를 이용해 푸는 방법
 *
 * - charCodeAt() : 문자열 -> 아스키코드
 * - String.fromCharCode() : 아스키코드 -> 문자열
 * 1. 배열을 문자열로 쪼개서, map 메서드로 하나씩 순회
 *  - 문자열이 비어있으면 return
 * 2. 알파벳을 통일 하기 위해 소문자 아스키코드로 변환
 *  - 대문자 아스키코드는 65가 A, 90이 Z
 *  - 소문자 아스키코드는 97이 a, 122가 z
 * 3. 변환한 아스키코드 + n이 122이상이면
 *  - 알파벳 단어 길이 25 + 알파벳 앞으로 이동 1만큼 뺴준고
 *  - 그렇지 않으면 그대로 더한 후 해당 아스키코드의 알파벳으로 변환
 */
function solution(s, n) {
  return s
    .split('') // 배열을 문자 단위로 쪼개서
    .map((el) => {
      if (el == ' ') return el; // 문자열이 비어있으면 return
      let tmp = el.charCodeAt(); // 아스키코드로 변환

      // 소문자 아스키코드 값 + n > 122 ? 문자열로(tmp + n - 26) : 문자열로(tmp + n)
      return el.toLowerCase().charCodeAt() + n > 122
        ? String.fromCharCode(tmp + n - 26) //
        : String.fromCharCode(tmp + n);
    })
    .join(''); // 문자 단위 배열을 다시 문자열로
}

// **** 아스키코드 없이 푸는 법
function solution(s, n) {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var answer = '';

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == ' ') {
      answer += ' ';
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
// console.log(solution('AB', 1));

console.log(solution('AB', 1));
