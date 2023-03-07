// 유클리드 호제법을 이용한 최대공약수 구하기
function fnGCD(a, b) {
  return a % b === 0 ? b : fnGCD(b, a % b);
}
// denum : 분자
// num : 분모
function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); // 최대공약수

  return [denum / gcd, num / gcd];
}

console.log(solution(1, 2, 3, 4));

/** 유클리드 호제법
 * 2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b)
 * a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
 * - a, b 를 서로 나눌때, 나누어진다면 b가 최대 공약수이다. (a>b)
 * - 만약 a,b가 나누어지지 않으면 b와 a를 b로 나눈 나머지(r)를 다시 나눈다.
 * - 서로가 나누어지면 a%b 가 최대공약수이다. 나누어지지 않는다면 위처럼 b와 r(a를 b를 나눈 나머지)를 다시 나눈다
 */
