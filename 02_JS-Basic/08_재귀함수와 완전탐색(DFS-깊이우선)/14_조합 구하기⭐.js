/**
 * 1부터 num까지 번호가 적힌 구슬이 있습니다.
 * 이 중 pick개를 뽑는 방법의 수를 출력하는 프로그램
 *
 * @param {*} num  3 <= num <= 10
 * @param {*} pick 2 <= pick <= N
 * @returns 1 ~ num의 번호 중 pick개를 뽑는 방법의 수
 */
function solution(num, pick) {
  let answer = [];
  let temp = Array.from({ length: pick }, () => 0);

  // DFS(레벨, for문의 시작번호)
  function DFS(level, start) {
    // 뽑은 횟수만큼되면, 깊은 복사로 새 배열 객체를 정답배열에 넣기
    if (level === pick) answer.push(temp.slice());
    else {
      for (let index = start; index <= num; index++) {
        // console.log(index); // 1 2 3 4 -> 2 3 4 -> 3 4 -> 4
        temp[level] = index;
        DFS(level + 1, index + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2)); // [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
// 1 ~ 4의 숫자 중 2개를 뽑는 방법의 수
