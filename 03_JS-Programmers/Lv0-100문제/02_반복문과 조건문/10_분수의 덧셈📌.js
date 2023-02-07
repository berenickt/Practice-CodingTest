/** https://school.programmers.co.kr/learn/courses/30/lessons/120808
 * @param {*} denum1
 * @param {*} num1
 * @param {*} denum2
 * @param {*} num2
 * @returns
 */
function solution(denum1, num1, denum2, num2) {
  const top = denum1 * num2 + denum2 * num1;
  const bottom = num1 * num2;
  let gcd = 1;

  for (let i = 2; i <= Math.min(top, bottom); i++) {
    if (top % i === 0 && bottom % i === 0) {
      gcd = i;
    }
  }

  return [top / gcd, bottom / gcd];
}

// 분수는 분자/부모 형태로 되어 있다.
// 두 분수를 더하려면 분모가 같아야 한다.

// 분모를 같게 하기 위해 두 분모를 곱해주고
// 각각의 분자에도 분모에 곱해진 값만큼 곱해준다.

// 이러한 공식을 코드로 풀어내 하나의 분수를 구했다.
// 단, 기약 분수이므로 분자와 분모의 최대공약수를 구하고 각각을 최대공약수로 나눴다.
