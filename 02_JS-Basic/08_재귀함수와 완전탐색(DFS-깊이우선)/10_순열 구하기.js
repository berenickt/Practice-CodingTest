/**
 * 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력
 *
 * cf. 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
 * 두 번째 줄에 N개의 자연수가 오름차순으로
 * @param {*} m
 * @param {*} arr
 * @returns
 */

function solution(m, arr) {
  let answer = [];
  n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));

// -----------------------------------------
function solution2(m, arr) {
  let answer = [];
  n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = [];
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp.push(arr[i]);
          DFS(L + 1);
          ch[i] = 0;
          tmp.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr2 = [3, 6, 9];
console.log(solution2(2, arr2));
