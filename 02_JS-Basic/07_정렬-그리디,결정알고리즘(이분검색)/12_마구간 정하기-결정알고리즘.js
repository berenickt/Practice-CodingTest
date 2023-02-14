/**
 * N개의 마구간이 수직선상에 있습니다.
 * 각 마구간은 x1, x2, x3, ... xN의 좌표를 가지며,
 * 마구간 사이에 좌표가 중복되는 일은 없습니다.
 *
 * 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
 * 각 마구간에는 한 마리의 말만 넣을 수 있고,
 * 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
 *
 * C마리의 말을 N개의 마구간에 배치했을 때,
 * 가장 가까운 두 말의 거리가 최대가 되는 그 최대값을 출력하는 프로그램
 *
 * @param {*} horses - 말의 수
 * @param {*} coordinates - 마구간의 좌표
 * @returns 가장 가까운 두 말의 최대 거리
 */
function solution(horses, coordinates) {
  let answer;
  coordinates.sort((a, b) => a - b);
  let left = 1;
  let right = coordinates[coordinates.length - 1];

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (count(coordinates, mid) >= horses) {
      answer = mid;
      left = mid + 1;
    } else right = mid - 1;
  }

  return answer;
}

function count(stable, dist) {
  let cnt = 1;
  let ep = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }

  return cnt;
}

console.log(solution(3, [1, 2, 8, 4, 9]));
