/** 투포인터(two pointer)
 * A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램
 *
 * 첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
 * 두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
 * 세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
 * 네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
 * cf. 각 집합의 원소는 1,000,000,000이하의 자연수
 * @param {*} arr1
 * @param {*} arr2
 * @returns 두 집합의 공통원소를 오름차순 정렬
 *
 * 1. 공통원소 찾기
 * 2. 오름차순
 */
function solution(arr1, arr2) {
  let answer = [];

  // 오름차순으로 정렬
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  // 포인터는 0번 인덱스부터
  let p1 = (p2 = 0);

  // 포인터는 각 배열의 길이만큼 순회
  while (p1 < arr1.length && p2 < arr2.length) {
    // 두 배열에 공통원소가 있으면, 정답배열에 p1을 push하고 포인터++, p2도 ++
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    }
    // p1 원소가 p2보다 작으면
    else if (arr1[p1] < arr2[p2]) p1++;
    // p2 원소가 p1보다 작으면
    else p2++;
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
