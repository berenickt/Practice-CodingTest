/**
 * N개의 마구간이 수직선상에 있습니다.
 * 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며,
 * 마구간간에 좌표가 중복되는 일은 없습니다.
 *
 * 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
 * 각 마구간에는 한 마리의 말만 넣을 수 있고,
 * 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
 *
 * C마리의 말을 N개의 마구간에 배치했을 때,
 * 가장 가까운 두 말의 거리가 최대가 되는 그 최대값을 출력하는 프로그램
 *
 * cf. 첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다.
 * cf. 둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집
 * @param {*} c
 * @param {*} stable
 * @returns
 */
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
}
function count(stable, dist) {
  let cnt = 1,
    ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
