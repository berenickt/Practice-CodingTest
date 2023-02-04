/**
 * 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력
 * (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다
 * @param {*} s 괄호 문자열, 문자열의 최대 길이는 30
 * @returns
 */

function solution(s) {
  let answer = 'YES';
  stack = [];
  for (let x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
}

let a = '(()(()))(()';
console.log(solution(a));
