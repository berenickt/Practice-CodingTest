/** https://school.programmers.co.kr/learn/courses/30/lessons/12940
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수
 * @param {*} n
 * @param {*} m
 * @returns 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환
 *
 * e.g. 3, 12의 최대공약수는 3, 최소공배수는 12이므로 [3, 12]를 반환
 *
 * cf. 최대공약수 : 두 수의 공통되는 약수 중에서 제일 큰 수
 * cf. 최소공배수 : 두 수의 공통되는 배수 중에서 제일 작은 수
 */
function solution(n, m) {
  const biggest = Math.max(n, m);

  // 최대공약수 구하기
  let max = 0; // 공약수 중에서 제일 큰 수만 저장
  for (let i = 1; i <= biggest; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }

  // 최소공배수 구하기
  let min = 0; // 공배수 중에서 제일 작은 수만 저장
  for (let i = biggest; i <= n * m; i += biggest) {
    if (i % Math.min(n, m) === 0) {
      min = i;
      break;
    }
  }
  return [max, min];
}

/** 유클리드 호제법, 최대공약수를 구하기 위한 알고리즘 (공식)
 * a를 b로 나눴을 때 (a가 b보다 클 경우) === 큰 수에서 작은 수를 나눴을 때
 * 나머지 값이 0이 되면, 작은 수(b)가 최대공약수가 된다.
 * 나머지 값이 0이 되지 않으면, 작은 수가(b)가 큰 수(a)가 되고
 * 나머지 값이 작은 수(b)가 된다.
 * 반복했을 때에 나머지 값이 0이 나오면, 작은 수(b)가 최대공약수가 된다.
 */
function solution2(n, m) {
  let maxNum = Math.max(n, m);
  let minNum = Math.min(n, m);
  let restNum = 0;

  while (maxNum % minNum > 0) {
    restNum = maxNum % minNum; // 큰 수에서 작은 수를 나눈 나머지 값을 저장
    maxNum = minNum; // 큰 수는 나눴을 때의 작은 수를 가져온다.
    minNum = restNum; // 작은 수에는 나머지 값을 가져온다.
  }
  // 최소공배수는 두 수를 곱합 수에 최대공약수를 나눠준 몫의 값
  return [minNum, (n * m) / minNum];
}

function solution3(n, m) {
  // 최대공약수 구하기
  let gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m));

  // 최소공배수 구하기
  let lcm = (n, m) => (n * m) / gcd(n, m);

  return [gcd(n, m), lcm(n, m)];
}
