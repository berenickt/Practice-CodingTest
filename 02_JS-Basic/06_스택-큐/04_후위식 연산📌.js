/**
 * 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램
 * e.g. 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12
 * - 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어짐
 *
 * e.g. 5 + 3 =>  5 3 +
 * @param {*} string 후위연산식, 연산식의 길이는 50을 넘지 않음
 * @returns
 */
function solution(string) {
  let answer;
  let stack = [];

  for (let element of string) {
    // 숫자면, 스택에 push
    if (!isNaN(element)) stack.push(Number(element));
    // 숫자가 아니면(=연산자이면)
    else {
      // 스택에서 우항, 좌항 순서로 꺼내기
      let rt = stack.pop();
      let lt = stack.pop();

      // 각 연산기호에 따라 계산
      if (element === '+') stack.push(lt + rt);
      else if (element === '-') stack.push(lt - rt);
      else if (element === '*') stack.push(lt * rt);
      else if (element === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

console.log(solution('352+*9-')); // 5 + 2 * 3 - 9 = 12
