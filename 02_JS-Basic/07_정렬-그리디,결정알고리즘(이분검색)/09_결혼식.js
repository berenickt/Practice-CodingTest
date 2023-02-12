/**
 * 현수는 다음 달에 결혼을 합니다.
 * 현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
 * 피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다.
 * 각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.
 *
 * 현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여,
 * 그 인원을 수용할 수 있는 장소를 빌리려고 합니다. 여러분이 현수를 도와주세요.
 *
 * e.g. 만약 한 친구가 오는 시간 13, 가는시간 15라면
 * 이 친구는 13시 정각에 피로연 장에 존재하는 것이고 15시 정각에는 존재하지 않는다고 가정
 *
 * @param {*} times : 각 인원의 오는 시간과 가는시간이 들어있는 2차원 배열
 * cf. 시간은 첫날 0시를 0으로 해서 마지막날 밤 12시를 72로 하는 타임라인으로 오는 시간과 가는 시간이 음이 아닌 정수로 표현
 * @returns 결혼 피로연에 동시에 존재하는 최대 인원수
 */
function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER; // 첫 번쨰 수는 무조건 들어가도록
  let timeLine = [];

  // 1. 각 인원의 도착시간, 퇴장시간을 분리해서 배열에 넣기
  for (let person of times) {
    timeLine.push([person[0], 'start']);
    timeLine.push([person[1], 'end']);
  }
  // console.log(timeLine);

  // 2. 도착시간 기준으로 오름차순
  timeLine.sort((a, b) => {
    // 도착시간이 같으면, 퇴장시간 기준으로 오름차순 (아스키코드순으로 s보다 e가 먼저임)
    // 즉, 퇴장시간이 먼저 도착시간보다 앞에 옴
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    // 아니면 도착시간 기준으로 오름차순
    else return a[0] - b[0];
  });
  // console.log(timeLine);

  let count = 0;

  // 도착한 사람을 count++, 퇴장한 사람을 count--
  for (let person of timeLine) {
    if (person[1] === 'start') count++;
    else count--;
    answer = Math.max(answer, count); // 최대 입장한 인원수
  }
  return answer;
}

console.log(
  solution([
    // 도착시간, 퇴장시간
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
); // 2
