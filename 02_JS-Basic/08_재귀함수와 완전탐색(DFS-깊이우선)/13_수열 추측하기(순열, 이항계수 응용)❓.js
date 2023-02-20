/**
 * 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다.
 * 그리고 둘째 줄부터 차례대로 파스칼의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다.
 *
 * e.g. N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다
 * 3  1  2   4
 *  4  3   6
 *   7   9
 *    16
 *
 * N과 가장 밑에 있는 숫자가 주어져 있을 때, 가장 윗줄에 있는 숫자를 구하는 프로그램
 * cf. 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력
 *
 * @param {*} topNumCnt 가장 윗줄에 있는 숫자의 개수
 * @param {*} bottomNum 가장 밑에 줄에 있는 수, 1,000,000 이하
 * @returns
 */
function solution(topNumCnt, bottomNum) {
  let answer;
  let flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0)); // 메모이제이션
  let check = Array.from({ length: topNumCnt + 1 }, () => 0); // 순열 돌리기
  let combinationNum = Array.from({ length: topNumCnt }, () => 0);
  let topNum = Array.from({ length: topNumCnt }, () => 0);

  function combination(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
  }

  function DFS(level, sum) {
    if (flag) return;

    // 답을 발견한 경우, 깊은 복사
    if (level === topNumCnt && sum === bottomNum) {
      answer = topNum.slice();
      flag = 1;
    }
    // 순열 만들기
    else {
      for (let index = 1; index <= topNumCnt; index++) {
        // 해당 check 배열의 인덱스가 비어있다면, 사용가능
        if (check[index] === 0) {
          check[index] = 1;
          topNum[level] = index;

          // 다음 원소로 이동하면서, 다시 위로 올라갈떄, check했던거 해제
          DFS(level + 1, sum + combinationNum[level] * topNum[level]);
          check[index] = 0;
        }
      }
    }
  }
  for (let i = 0; i < topNumCnt; i++) {
    combinationNum[i] = combination(topNumCnt - 1, i);
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16)); // [ 3, 1, 2, 4 ]
