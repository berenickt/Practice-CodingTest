/**
 * 1부터 N까지 번호가 적힌 구슬이 있습니다.
 * 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력
 *
 * @param {*} bead 번호가 적힌 구슬 ( 3 <= N <= 10 )
 * @param {*} pick 뽑는 횟수, 중복 가능
 * @returns 구슬을 여러 번 뽑아서 일렬로 나열하는 경우의 수
 */
function solution(bead, pick) {
  let answer = [];
  let temp = Array.from({ length: pick }, () => 0); // 뽑는 횟수가 저장되는 곳

  function DFS(level) {
    // 뽑은 횟수만큼 되면, 깊은 복사로 새 배열 객체를 정답배열에 넣기
    if (level === pick) answer.push(temp.slice());
    else {
      // 번호가 적힌 구슬까지 순회
      for (let index = 1; index <= bead; index++) {
        temp[level] = index;
        DFS(level + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, 2));
// 3*3 = 9가지의 경우의 수
// [
//   [ 1, 1 ], [ 1, 2 ], [ 1, 3 ],
//   [ 2, 1 ], [ 2, 2 ], [ 2, 3 ],
//   [ 3, 1 ], [ 3, 2 ], [ 3, 3 ]
// ]
