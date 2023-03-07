function solution(arr) {
  let answer = [];

  for (let element of arr) {
    // 1. 숫자로(문자변환하고, 문자단위로쪼개고, 뒤집고, 합치기)
    let result = Number(element.toString().split('').reverse().join(''));

    // 2. 소수면, 정답배열에 추가
    if (isPrime(result)) answer.push(result);
  }
  return answer;
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
