/**
 * 문자와 숫자가 섞여있는 문자열이 주어지면, 그 중 숫자만 추출하여 그 순서대로 자연수를 만들기
 *
 * e.g. 만약 "tge0a1h205er"에서 숫자만 추출하면 0, 1, 2, 0, 5이고,
 * 이것을 자연수를 만들면 1205이 됩니다.
 *
 * cf. 추출하여 만들어지는 자연수는 100,000,000을 넘지 않음
 * @param {*} str 숫자가 섞여있는 문자열, 문자열의 길이는 50을 넘지 않음
 * @returns
 */
function solution(str) {
  let answer = '';

  for (let x of str) {
    if (!isNaN(x)) answer += x; // 숫자만 뽑기
  }

  return parseInt(answer); // 앞의 0은 날리고 숫자로 변환
}

console.log(solution('g0en2T0s8eSoft')); // 208
