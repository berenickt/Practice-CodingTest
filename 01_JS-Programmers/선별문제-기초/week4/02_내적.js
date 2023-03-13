/** https://school.programmers.co.kr/learn/courses/30/lessons/70128
 * 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수
 * cf. a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)
 *
 * @param {*} a 1차원 정수 배열
 * @param {*} b 1차원 정수 배열
 * @returns a와 b의 내적
 */
function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// **** map + reduce
function solution2(a, b) {
  const answer = a
    .map((num, i) => {
      return num * b[i];
    })
    .reduce((el, cu) => {
      return el + cu;
    }, 0);

  return answer;
}

// **** reduce
function solution3(a, b) {
  const answer = a.reduce((acc, cur, idx) => {
    return acc + cur * b[idx];
  }, 0);
  return answer;
}

function solution4(a, b) {
  return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2
