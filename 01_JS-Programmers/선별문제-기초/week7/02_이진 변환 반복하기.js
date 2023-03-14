/** https://school.programmers.co.kr/learn/courses/30/lessons/70129
 * 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.
 * - x의 모든 0을 제거합니다.
 * - x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
 *
 * e.g. x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.
 * @param {*} s 0과 1로 이루어진 문자열
 * @returns s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때,
 *          이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return
 */
function solution_for(s) {
  let count = 0;
  let remove = 0;

  while (s !== '1') {
    count++;

    let temp = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '0') {
        remove++;
        continue;
      }
      temp += s[i];
    }

    s = temp.length;
    s = s.toString(2);
  }
  return [count, remove];
}

function solution2(s) {
  let [count, remove] = [0, 0];

  function recursion(s) {
    if (s === '1') {
      return [count, remove];
    }
    count++;

    s = s.split('').filter(num => {
      if (num === '0') remove++;
      return num !== '0';
    }).length;

    return recursion(s.toString(2));
  }
  return recursion(s);
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
