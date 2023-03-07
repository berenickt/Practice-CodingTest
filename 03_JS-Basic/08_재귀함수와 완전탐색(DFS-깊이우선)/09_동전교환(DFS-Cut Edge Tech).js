/**
 * 다음과 같이 여러 단위의 동전들이 주어져 있을때
 * 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가?
 * 각 단위의 동전은 무한정 쓸 수 있음
 *
 * @param {*} changeMoney 거스름돈 (1 <= M<= 500)
 * @param {*} coinType 동전 종류가 들어있는 배열 (1 <= N <= 12)
 * 각 동전의 종류는 100원을 넘지 않음
 * @returns 거슬러줄 동전의 최소 개수
 */
function solution(changeMoney, coinType) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(level, sum) {
    // 동전누적합이 거스름돈을 넘으면, 종료
    if (sum > changeMoney) return;
    // ** 15원을 만들기 위해 다른 가지로 올라가서 더 안만들게, 효율성을 위해
    // 동전개수가 기존답(가지)보다 크면, 종료
    if (level >= answer) return;

    // 동전누적합이 거스름돈이 되면, 최소한의 동전개수를 정답으로 넣기
    if (sum === changeMoney) {
      console.log(level, sum);
      answer = Math.min(answer, level);
    }
    // 동전종류만큼 순회
    else {
      for (let index = 0; index < coinType.length; index++) {
        DFS(level + 1, sum + coinType[index]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(15, [1, 2, 5])); // 3
// 5원짜리 동전 3개로 15원을 거슬러줄 수 있음
