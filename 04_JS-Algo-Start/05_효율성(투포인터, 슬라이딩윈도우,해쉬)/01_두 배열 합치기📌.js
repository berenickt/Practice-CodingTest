/** 투포인터(two pointer)
 * 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
 * 1줄에 첫 번째 배열의 크기 N(1<=N<=100)
 * 2줄에 N개의 배열 원소가 오름차순
 * 3줄에 두 번째 배열의 크기 M(1<=M<=100)이
 * 4줄에 M개의 배열 원소가 오름차순으로
 *
 * 각 리스트의 원소는 int형 변수의 크기를 넘지 않음
 * 오름차순으로 정렬된 배열을 출력
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 *
 * sort()로 하면 nlogn의 시간복잡도를 가져서 X
 */
function solution(arr1, arr2) {
  let answer = [];
  let arrOneLen = arr1.length;
  let arrTwoLen = arr2.length;

  // **** 포인터 2개가 0을 가리킴
  let p1 = (p2 = 0);

  // **** 포인터 2개가 배열의 길이보다 작은 동안에만 순회
  while (p1 < arrOneLen && p2 < arrTwoLen) {
    // p1이 p2보다 작거나 같으면, 정답배열에 p1을 push하고 포인터++
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    // p2가 작으면 정답배열에 p2를 push하고 포인터++
    else answer.push(arr2[p2++]);
  }
  // **** 두 배열 중에 더 길어서 남은 값들을 정답배열에 push
  // p1이 남았다면 나머지 남은 값들을 모두 push
  while (p1 < arrOneLen) answer.push(arr1[p1++]);
  while (p2 < arrTwoLen) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b)); // 1 2 3 3 5 6 7 9
