/**
 * 다음과 같이 여러 단위의 동전들이 주어져 있을 때,
 * 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가?
 * 각 단위의 동전은 무한정 쓸 수 있다.
 *
 * @param {*} change 거스름돈 (1 <= M <= 500)
 * @param {*} coin 동전의 종류 (cf. 각 동전의 종류는 100원을 넘지 않는다)
 * @returns 거슬러 줄 동전의 최소 개수
 */
function solution(change, coin) {
  // 0이 아닌 임의의 큰 숫자로 배열 초기화 (최소값으로 바꿔주기위해)
  let dy = Array.from({ length: change + 1 }, () => 1000);

  dy[0] = 0; // 0원 거슬러주는것은 0개 필요

  // 동전 종류만큼 순회
  for (let i = 1; i < coin.length; i++) {
    // 각 동전종류마다 거스름돈까지 순회, j는 거스름돈을 의미
    for (let j = coin[i]; j <= change; j++) {
      // 각각의 거스름돈을 거슬러줄 떄, 기존 j와 코인종류별 j를 비교해, 더 작은 값으로 바꾸기
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  return dy[change];
}

console.log(solution(15, [1, 2, 5])); // 3   |   5원 3개 === 15원

// 냅색 알고리즘(가방 문제)은 유명한 Dynamic Programming의 문제 중 하나이다.
// DFS로도 풀이가 가능하지만,
// 시간복잡도가 걱정될 경우(ex. 동전 종류가 많다, 거스름돈이 크다)
// Dynamic programming 방식으로 풀이하면 시간복잡도가 줄어든다.
