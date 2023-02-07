/** https://school.programmers.co.kr/learn/courses/30/lessons/120808
 * 1. 분모 덧셈
 * 2. 분자 분모의 최대공약수로 나누기
 * 2-1. 분자분모중 작은 수 찾기
 * 2-2. 작은수를 분바분모로 나눠보기
 * 2-2-1. 둘다 나누어 떨어지면 그 나눈 수가 최대 공약수
 * 2-2-2. 안 나누어떨어지면 작은 수를 1 줄이고 2-2로 돌아가기
 */
function solution(denum1, num1, denum2, num2) {
  const denum = denum1 * num2 + denum2 * num1;
  const num = num1 * num2;

  let minNumber;

  if (denum < num) {
    minNumber = denum;
  } else {
    minNumber = num;
  }
  // 나누어 떨어지는 것 -> 나머지가 0인 것.
  while (true) {
    if (denum % minNumber === 0) {
      if (num % minNumber === 0) {
        // minNumber은 최대공약수
        return [denum / minNumber, num / minNumber];
      }
    }
    minNumber = minNumber - 1;
  }
}
console.log(solution(1, 2, 3, 4));

// if() {} : ()안이 조건이 맞는 동안 {}를 다음 실행
// while() {} : ()이 true인 동안 {}를 반복 실행
