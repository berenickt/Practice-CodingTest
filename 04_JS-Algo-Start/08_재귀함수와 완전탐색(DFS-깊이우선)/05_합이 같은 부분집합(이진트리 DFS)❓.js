/**
 * N개의 원소로 구성된 자연수 집합이 주어지면,
 * 이 집합을 두 개의 부분집합으로 나누었을 때
 * 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 "YES"를 출력하고,
 * 그렇지 않으면 "NO"를 출력하는 프로그램
 *
 * 둘로 나뉘는 두 부분집합은 서로소 집합(Disjoint Set)이며,
 * 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야 합니다.
 *
 * e.g. {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이
 * 16으로 같은 경우가 존재하는 것을 알 수 있다
 *
 * @param {*} arr - N개의 집합 원소, 각 원소는 중복X, 크기는 1,000,000 이하
 * @returns 원소의 합이 서로 같은 경우가 존재하면 "YES", 아니면 "NO"
 *
 */
function solution(arr) {
  let answer = 'NO';
  let total = arr.reduce((a, b) => a + b, 0);

  // ** 답을 이미 찾았을 경우 불필요한 순회를 멈추기 위한 변수
  // 초기값은 0이고, 답을 찾으면 1, 0일때만 순회
  let flag = 0;

  function DFS(level, sum) {
    if (flag) return; // 답을 찾으면, 종료

    if (level === arr.length) {
      // [전체 집합의] - [집합의 합] === [집합의 합]이 true면, YES
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
      }
    }
    // 다음 Level로 이동하면서
    else {
      DFS(level + 1, sum + arr[level]); // 원소값 더하면서 다음 Level로 이동 (왼쪽)
      DFS(level + 1, sum); // 다음 Level로만 이동 (오른쪽)
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10])); // YES
