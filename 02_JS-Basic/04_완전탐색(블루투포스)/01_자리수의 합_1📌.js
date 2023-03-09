/**
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,
 * 그 합이 최대인 자연수를 출력하는 프로그램
 *
 * cf. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
 * e.g. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력
 * @param {*} n N(3<=N<=100)개인 자연수
 * @param {*} arr 자연수가 들어있는 배열, 각 자연수의 크기는 10,000,000를 넘지 않음
 * @returns 자릿수의 합이 최대인 자연수
 *
 * e.g. 입력 : 7 | 128 460 603 40 521 137 123
 * e.g. 출력 : 137
 *
 * 128의 합을 구하는 법
 * 1. (x % 10) 연산으로 맨 오른쪽 한 자리수를 추출한다.
 * 2. 추출한 값을 sum 에 더한다.
 * 3. (x / 10) 연산으로 자리수를 줄인다.
 *
 * cf. temp, tmp = temporary(일시적인)
 */
function solution(n, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER; // 가장 작은 수로 초기화

  for (let x of arr) {
    let sum = 0;
    let tmp = x;

    while (tmp) {
      sum += tmp % 10; // 나머지 구하기
      tmp = Math.floor(tmp / 10); // 몫 구하기
    }
    // console.log(sum); // 11 10 9 4 8 11 6

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123])); // 137
