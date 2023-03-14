/**
 * N개의 자연수가 입력되면 각 자연수를 뒤집은 후
 * 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램
 *
 * e.g. 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력
 * cf. 단 910를 뒤집으면 19로 숫자화 해야함
 * cf. 첫 자리부터의 연속된 0은 무시
 * @param {*} arr N(3<=N<=100)개의 자연수 배열, 각 자연수의 크기는 100,000을 넘지않음
 * @returns 뒤집은 수가 소수인 배열
 *
 * 1. 입력받은 자연수 한자리씩 뽑기
 * 2. 숫자 앞뒤 뒤집기
 * 3. 소수 판별
 */
function solution(arr) {
  let answer = [];

  for (let element of arr) {
    let result = 0;

    while (element) {
      // **** 1. 입력받은 자연수 한자리씩 뽑기
      let eachNum = element % 10;
      // console.log(eachNum); // (2 3) (5 5) (2 6) ....

      // **** 2. 숫자 앞뒤로 뒤집기
      result = result * 10 + eachNum;
      // console.log(result);
      // 0 * 10 + 2
      // 2 * 10 + 3
      // 5 * 10 + 5 ...

      // **** 몫 구하기
      // 어떤 숫자든 % 10을 하면 나머지(맨 오른쪽 숫자)
      // 어떤 숫자든 / 10을 하면 몫
      element = parseInt(element / 10);
      console.log(element);
    }

    // **** 3. 소수면, 정답배열에 넣기
    if (isPrime(result)) answer.push(result);
  }
  // return answer;
}

// **** 소수 판별
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
