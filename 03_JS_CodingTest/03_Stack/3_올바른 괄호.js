function solution(s) {
  const stack = [];

  // for of : 배열 순회
  for (const c of s) {
    // 여는 괄호일 경우
    if (c === '(') {
      stack.push(c);
    } else {
      // 스택이 비어있는 경우
      if (stack.length === 0) {
        return false;
      }
      // 닫는 괄호일 경우
      stack.pop();
    }
  }
  // 빈 배열이라면 true, 아니라면 false
  return stack.length === 0;
}
