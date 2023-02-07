/** https://school.programmers.co.kr/learn/courses/30/lessons/120882
 * 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
 * @param {*} score 영어 점수와 수학 점수를 담은 2차원 정수 배열
 * @returns 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열
 */
function solution(score) {
  const avgs = score.map(([a, b]) => (a + b) / 2);
  const avgRank = [...avgs]
    .sort((a, b) => b - a)
    .map((avg, i) => ({ avg, rank: i + 1 }))
    .map((a, i, arr) => (i > 0 && a.avg === arr[i - 1].avg ? { ...a, rank: arr[i - 1].rank } : a));

  return avgs.map((_avg) => avgRank.find(({ avg }) => _avg === avg).rank);
}

// -----------------------------------------------------------------
function solution2(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  let sorted = avg.slice().sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
}

// 평균은 각각 75, 70, 55, 65 이므로 등수를 매겨 [1, 2, 4, 3]을 return
console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
); // [1, 2, 4, 3]

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
); // [4, 4, 6, 2, 2, 1, 7]
