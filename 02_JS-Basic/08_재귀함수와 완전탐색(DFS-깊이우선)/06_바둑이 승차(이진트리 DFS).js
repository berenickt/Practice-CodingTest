/**
 * 철수는 그의 바둑이들을 데리고 시장에 가려고 한다.
 * 그런데 그의 트럭은 C킬로그램 넘게 태울수가 없다.
 * 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
 *
 * N마리의 바둑이와 각 바둑이의 무게 W가 주어지면,
 * 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램
 *
 * @param {*} weight - 트럭의 무게
 * @param {*} arr - 바둑이들의 무게가 들어있는 배열
 * @returns - 트럭에 바둑이들을 태울 수 있는 가장 무거운 무게
 *
 */
function solution(weight, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(level, sum) {
    if (sum > weight) return; // ( 바둑이 무게 합 > 트럭무게 )면 종료

    if (level === arr.length) {
      // console.log(sum); // 32가지 경우의 수
      answer = Math.max(answer, sum); // 기존 sum보다 크면, 새 sum으로 바꿔주기
    } else {
      DFS(level + 1, sum + arr[level]); // 값 더하면서 다음 Level로 이동 (태우는 경우)
      DFS(level + 1, sum); // 다음 Level로만 이동 (태우지 않는 경우)
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61])); // 242
// 바둑이들을 태울 수 있는 경우의 수 = 2^5 = 32
