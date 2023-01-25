/**
 * 7개의 자연수가 주어질 때,
 * 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
 * 고른 홀수들 중 최소값을 찾는 프로그램
 * @param {*} arr 100보다 작은 자연수
 * @returns [홀수들의 합, 홀수들 중 최소값]
 * e.g.
 * 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면
 * 이들 중 홀수는 77, 41, 53, 85이므로 그 합은 77 + 41 + 53 + 85 = 256
 * 홀수들 중 최소값은 41
 */
function solution(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER; // 가장 큰 값으로 최소화

  // 1. 홀수들을 찾은 후 그 값들을 모두 더함
  // 2. 홀수들 중의 최소값
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;

      // 첫 번쨰 홀수가 맨 처음 min에 들어감, 그 이후 비교해서 더 작은 값이 들어감
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
