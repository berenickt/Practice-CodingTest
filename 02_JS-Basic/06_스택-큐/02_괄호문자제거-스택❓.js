/**
 * 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램
 * @param {*} string 문자열, 문자열의 길이는 100을 넘지 않음
 * @returns () 사이에 존재하는 모든 문자를 제거하고 남은 문자
 */

function solution(string) {
  let answer;
  let stack = [];

  for (let element of string) {
    // 닫는 괄호라면, 여는 괄호까지 pop이 되는 동안 스택에서 빼기
    if (element === ')') {
      while (stack.pop() !== '(');
    }
    // 아니라면 스택에 계속 넣기
    else stack.push(element);
  }
  // 문자 합치기
  answer = stack.join('');
  return answer;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM
