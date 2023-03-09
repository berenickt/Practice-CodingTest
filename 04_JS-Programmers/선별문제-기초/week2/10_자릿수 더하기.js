/** https://school.programmers.co.kr/learn/courses/30/lessons/12931
 * 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수
 * e.g. N = 123이면 1 + 2 + 3 = 6을 return
 */
function solution(n) {
  n = String(n);
  let answer = 0;
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i]);
  }
  return answer;
}

function solution2(n) {
  const answer = String(n)
    .split('')
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
  return answer;
}

function solution3(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
