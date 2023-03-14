/** https://school.programmers.co.kr/learn/courses/30/lessons/12934
 * 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
 * @param {*} n
 * @returns n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴
 */
function solution(n) {
  let answer = -1;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      // 제곱근을 찾은 경우 (제곱의 값이 n과 동일한 경우)
      answer = i + 1;
      return answer * answer;

      // answer ** 2  -- 거듭제곱 연산자
      // Math.pow( answer, 2 )  -- 제곱 메소드
    }
  }
  // 제곱근을 찾지 못한 경우 (-1 을 리턴)
  return answer;
}

function solution2(n) {
  const sqrt = Math.sqrt(n);
  if (n % sqrt === 0) {
    return (sqrt + 1) ** 2;
  }
  return -1;
}

function solution3(n) {
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt) === true) {
    // 제곱근일 경우 (= 정수인 경우) true 반환
    sqrt++;
    return sqrt * sqrt;
  } else {
    // 제곱근이 아닐 경우 (= 정수가 아닐 경우) false 반환
    return -1;
  }
}

function solution4(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

console.log(solution(121)); // 144
console.log(solution(3)); // -1
