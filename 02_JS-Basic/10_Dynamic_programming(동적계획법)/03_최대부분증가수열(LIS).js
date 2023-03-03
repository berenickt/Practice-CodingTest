/**
 * N개의 자연수로 이루어진 수열이 주어졌을 때,
 * 그 중에서 가장 길게 증가하는(작은 수에서 큰수로) 원소들의 집합을 찾는 프로그램
 *
 * e.g. 원소가 2, 7, 5, 8, 6, 4, 7, 12, 3이면 가장 길게 증가하도록
 * 원소들을 차례대로 뽑아내면 2, 5, 6, 7, 12를 뽑아내어
 * 길이가 5인 최대 부분 증가수열을 만들 수 있다
 *
 * @param {*} arr n개의 자연수 수열 ( 1 <= n <= 1000 )
 * @returns 부분증가수열의 최대 길이
 */
function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1; // 가장 처음 있는 값은 자기자신의 길이만 가짐

  // arr 순회
  for (let i = 1; i < arr.length; i++) {
    let max = 0;

    // 뒤에서부터 앞으로 순회
    for (let j = i - 1; j >= 0; j--) {
      // 뒤에 항이 앞에 항보다 작거나, 뒤에 항이 최대값보다 크면
      if (arr[j] < arr[i] && dy[j] > max) {
        // 그 뒤에 항을 최대값으로
        max = dy[j];
      }
    }

    // if문 만족하는게 하나도 없다면, 자기자신만 더하기
    // 최대값이 있으면, 만족한 값의 경우에다, 자기자신 더하기
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4
