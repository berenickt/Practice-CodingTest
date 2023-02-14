/**
 * 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여
 * 현수는 선생님이 주신 N개의 문제를 풀려고 합니다.
 *
 * 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다.
 * 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.
 * (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있음)
 *
 * cf. 첫 번째 줄에 문제의 개수N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어짐
 * cf. 두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어짐
 * @param {*} m
 * @param {*} ps
 * @param {*} pt
 * @returns
 */

function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
