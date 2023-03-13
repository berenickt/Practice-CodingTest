/** https://school.programmers.co.kr/learn/courses/30/lessons/42889
 * 슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만,
 * 요즘 신규 사용자의 수가 급감한 것이다.
 * 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.
 *
 * 이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다.
 * 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만,
 * 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.
 *
 * 실패율은 다음과 같이 정의한다.
 * => 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 *
 * @param {*} N 전체 스테이지의 개수
 * @param {*} stages 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
 * @returns 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열
 */
function solution(N, stages) {
  // 모든 스테이지의 번호를 오름차순 형태로 정렬
  stages.sort((a, b) => a - b);

  const infos = [];
  for (let i = 1; i <= N; i++) {
    infos.push({
      stage: i, // 현재 스테이지의 번호
      users: 0, // 클리어하지 못한 (플레이중인) 유저의 수
      fail: 0, // 스테이지의 실패율을 저장
    });
  }

  let allUsers = stages.length; // 모든 유저의 수 (초기값)
  for (let i = 0; i < stages.length; i++) {
    if (infos[stages[i] - 1]) {
      infos[stages[i] - 1].users++;

      // 현재 스테이지의 번호와 다음 스테이지의 번호가 동일하지 않다면
      // === 현재 스테이지의 유저의 합산이 완료되는 시점
      if (stages[i] !== stages[i + 1]) {
        const fail = infos[stages[i] - 1].users / allUsers;
        allUsers -= infos[stages[i] - 1].users;

        infos[stages[i] - 1].fail = fail;
      }
    }
  }

  return infos
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map(el => el.stage);
}

function solution2(N, stages) {
  stages.sort((a, b) => a - b);

  let allUsers = stages.length; // 총 유저의 수
  const answer = new Array(N)
    .fill(1)
    .map((num, i) => {
      const stage = num + i;
      const arr = stages.slice(stages.indexOf(stage), stages.lastIndexOf(stage) + 1);
      const fail = arr.length / allUsers;
      allUsers -= arr.length;

      return { stage, fail };
    })
    .sort((a, b) => {
      return b.fail - a.fail; // 내림차순
    })
    .map(el => el.stage);
  return answer;
}

function solution3(N, stages) {
  let stageNFailRate = [];
  for (let stage = 1; stage <= N; stage++) {
    const playerReached = stages.filter(player => player >= stage).length;
    const playerChallenging = stages.filter(player => player === stage).length;
    stageNFailRate.push([stage, playerChallenging / playerReached]);
  }
  stageNFailRate.sort((a, b) => b[1] - a[1]);
  return stageNFailRate.map(stage => stage[0]);
}

console.log(solution((5)[(2, 1, 2, 6, 2, 4, 3, 3)])); // [3, 4, 2, 1, 5]
console.log(solution((4)[(4, 4, 4, 4, 4)])); // [4, 1, 2, 3]
