/**
 * 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램
 * e.g. 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12
 * @param {*} s 후위연산식, 연산식의 길이는 50을 넘지 않음
 * - 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어짐
 * @returns
 */
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
