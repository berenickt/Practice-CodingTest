/**
 * 10 이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력
 * cf. 순열이라 중복을 허락하지 않습니다.
 *
 * @param {*} pick 뽑는 횟수
 * @param {*} arr N개의 자연수가 오름차순으로 된 배열
 * @returns 오름차순 배열 중 pick번 뽑는 경우의 수
 */
function solution(pick, arr) {
  let answer = [];
  let checkArr = Array.from({ length: arr.length }, () => 0);
  let pickArr = Array.from({ length: pick }, () => 0);

  function DFS(level) {
    // 뽑은 횟수만큼 되면, 깊은 복사로 새 배열 객체를 정답배열에 넣기
    if (level === pick) answer.push(pickArr.slice());
    else {
      // 입력받은 배열길이만큼 순회
      for (let index = 0; index < arr.length; index++) {
        // 해당 check 배열의 인덱스가 비어있다면, 사용가능
        if (checkArr[index] === 0) {
          checkArr[index] = 1;
          pickArr[level] = arr[index];

          // 다음 원소로 이동하면서, 다시 위로 올라갈떄, check했던거 해제
          DFS(level + 1);
          checkArr[index] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution(2, [3, 6, 9])); // [ [ 3, 6 ], [ 3, 9 ], [ 6, 3 ], [ 6, 9 ], [ 9, 3 ], [ 9, 6 ] ]

// -----------------------------------------
function solution2(pick, arr) {
  let answer = [];
  let checkArr = Array.from({ length: arr.length }, () => 0);
  let pickArr = []; // 초기배열 만드는 대신, 빈 배열로

  function DFS(level) {
    if (level === pick) answer.push(pickArr.slice());
    else {
      for (let index = 0; index < arr.length; index++) {
        // 해당 check 배열의 인덱스가 비어있다면, 사용가능
        if (checkArr[index] === 0) {
          checkArr[index] = 1;
          pickArr.push(arr[index]);

          // 다음 원소로 이동하면서, 다시 위로 올라갈떄, check했던거 해제
          DFS(level + 1);
          checkArr[index] = 0;
          pickArr.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution2(2, [3, 6, 9]));
