/**
 * 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여
 * 현수는 선생님이 주신 N개의 문제를 풀려고 합니다.
 *
 * 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다.
 * 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.
 * (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있음)
 *
 * @param {*} timeLimit - 제한시간
 * @param {*} point - 문제를 풀었을 떄 점수
 * @param {*} timeTaken - 문제 푸는데 걸리는 시간
 * @returns 제한시간 내 얻을 수 있는 최대점수
 */
function solution(timeLimit, point, timeTaken) {
  let answer = Number.MIN_SAFE_INTEGER;
  let problemNum = point.length;

  function DFS(level, sum, time) {
    if (time > timeLimit) return; // 제한시간을 넘기면, 종료

    if (level === problemNum) {
      // console.log(sum); // 32가지 경우의 수
      answer = Math.max(answer, sum); // 기존 sum보다 크면, 새 sum으로 바꿔주기
    }
    // 문제를 풀지, 말지 결정
    else {
      DFS(level + 1, sum + point[level], time + timeTaken[level]);
      DFS(level + 1, sum, time); // 다음 Level로만 이동 (문제를 안푸는 경우)
    }
  }

  DFS(0, 0, 0);
  return answer;
}

console.log(solution(20, [10, 25, 15, 6, 7], [5, 12, 8, 3, 4])); // 41
