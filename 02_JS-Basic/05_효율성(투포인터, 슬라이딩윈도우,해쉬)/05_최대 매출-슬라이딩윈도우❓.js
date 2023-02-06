/** 슬라이딩 윈도우(Sliding Window)
 * 현수의 아빠는 제과점을 운영합니다.
 * 현수 아빠는 현수에게 N일 동안의 매출기록을 주고
 * 연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
 *
 * e.g. 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면,
 * 12 15 11 20 25 10 20 19 13 15
 * 연속된 3일간의 최대 매출액은 11 + 20 + 25 = 56만원입니다.
 *
 * cf. 첫 줄에 N(5<=N<=100,000)과 K(2<=K<=N)가 주어집니다.
 * cf. 두 번째 줄에 N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수
 * @param {*} DaySale 연속된 최대 매출을 계산하는 날짜
 * @param {*} arr N일 동안의 매출기록 배열
 * @returns
 */
function solution(DaySale, arr) {
  let answer = 0;
  let sum = 0;

  // 연속된 최대매출날짜만큼 sum에 증감
  for (let i = 0; i < DaySale; i++) sum += arr[i];
  answer = sum;
  // console.log(answer); // 38 56

  // 앞에꺼는 빼고, 뒤에꺼는 더하면서 순회
  for (let i = DaySale; i < arr.length; i++) {
    sum += arr[i] - arr[i - DaySale];
    // console.log(arr[i]); // 20 25 10 20 19 13 15 56
    // console.log(arr[i - DaySale]); // 12 15 11 20 25 10 20 56
    // console.log(sum); // 46 56 55 55 49 52 47 56
    // console.log(answer); // 38 46 56 56 56 56 56 56
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
