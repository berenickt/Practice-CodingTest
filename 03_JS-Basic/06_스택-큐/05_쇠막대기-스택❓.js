/**
 * 문제 그림 참고
 *
 * @param {*} s
 * @returns
 */
function solution(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // 여는 괄호라면, 여는 괄호 push
    if (s[i] === '(') stack.push('(');
    else {
      // 닫는 괄호라면 빼기
      stack.pop();

      // 그 앞에 '('라면(=레이저라면) 스택의 길이를 스택 원소의 개수
      if (s[i - 1] === '(') answer += stack.length;
      else answer++;
      // stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    }
  }
  return answer;
}

console.log(solution('()(((()())(())()))(())')); // 17
