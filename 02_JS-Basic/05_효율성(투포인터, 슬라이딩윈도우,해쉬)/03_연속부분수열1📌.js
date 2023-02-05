/** 투포인터(two pointer)
 * N개의 수로 이루어진 수열이 주어집니다.
 * 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램
 *
 * e.g. 만약 N=8, M=6이고 수열이 다음과 같다면 1 2 1 3 1 1 1 2
 * 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지
 *
 * cf. 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어짐
 * cf. 수열의 원소값은 1,000을 넘지 않는 자연수
 * @param {*} target 부분수열의 합
 * @param {*} arr n개의 수로 이루어진 수열
 * @returns target이 되는 경우의 수
 *
 * 1. 포인터 2개(left, right))를 만들고
 * 2. 맨 처음 right를 올리면서 target보다 크거나 같을 때까지 증감하면서 값을 더함
 * 3. target보다 크면, left가 증감하면서 값을 뺌
 * 4. target보다 작으면, 다시 right를 올리면서 target보다 크거나 같을 때까지 증감하면서 값을 더함
 * 5. 2 ~ 4 과정 반복하면서 target인 경우의 수를 count
 */
function solution(target, arr) {
  let answer = 0;
  let left = 0;
  let sum = 0;

  // left와 right 두 개의 포인터가 돌며, right 값을 sum에 누적
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    // 누적된 sum 값이 target과 일치하면 경우의 수 증가
    if (sum === target) answer++;

    // 누적시킨 값이 target보다 크거나 같다면, left값을 빼면서 증감
    while (sum >= target) {
      sum -= arr[left++];
      if (sum === target) answer++; // target과 일치하면 경우의 수 증가
    }
  }
  return answer;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
