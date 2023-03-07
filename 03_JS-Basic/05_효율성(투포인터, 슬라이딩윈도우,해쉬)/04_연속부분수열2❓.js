/** 투포인터(two pointer)
 * N개의 수로 이루어진 수열이 주어집니다.
 * 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램
 *
 * 만약 N=5, M=5이고 수열이 다음과 같다면
 * 1 3 1 2 3
 * 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지
 *
 * cf. 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
 * cf. 수열의 원소값은 1,000을 넘지 않는 자연수
 * @param {*} target 부분수열의 합
 * @param {*} arr n개의 수로 이루어진 수열
 * @returns target이 되는 경우의 수
 */
function solution(target, arr) {
  let answer = 0;
  let sum = 0;
  let left = 0;

  // left와 right 두 개의 포인터가 돌며, right 값을 sum에 누적
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    // 누적시킨 값이 target보다 크면, left값을 빼면서 증감
    while (sum > target) {
      sum -= arr[left++];
    }
    answer += right - left + 1;
    // console.log(answer); // 1 3 6 8 10 10
  }
  return answer;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
