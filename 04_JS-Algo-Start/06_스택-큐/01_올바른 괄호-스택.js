/**
 * 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력
 * (())() 이것은 괄호의 쌍이 올바르게 위치한거지만,
 * (()()))은 올바른 괄호가 아니다
 *
 * @param {*} string 괄호 문자열, 문자열의 최대 길이는 30
 * @returns
 */

function solution(string) {
  let answer = 'YES';
  let stack = [];

  for (let element of string) {
    // **** 여는 괄호라면, 스택에 넣고
    if (element === '(') stack.push(element);
    else {
      // **** 닫는 괄호라면, 스택에서 빼기
      // 스택이 비어있으면 NO
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  // 배열에 '('가 남아있으면, 거짓
  if (stack.length > 0) return 'NO';
  return answer;
}

console.log(solution('(())()')); // YES
console.log(solution('(()(()))(()')); // NO

// push : 배열에 넣기
// pop : 배열에 빼기
