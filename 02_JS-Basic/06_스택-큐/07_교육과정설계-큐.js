/**
 * 현수는 1년 과정의 수업계획을 짜야 합니다. 수업중에는 필수과목이 있습니다.
 * 이 필수과목은 반드시 이수해야 하며, 그 순서도 정해져 있습니다.
 *
 * 만약 총 과목이 A, B, C, D, E, F, G가 있고,
 * 여기서 필수과목이 CBA로 주어지면 필수과목은 C, B, A과목이며 이 순서대로 꼭 수업계획을 짜야 합니다.
 *
 * 여기서 순서란 B과목은 C과목을 이수한 후에 들어야 하고,
 * A과목은 C와 B를 이수한 후에 들어야 한다는 것입니다.
 *
 * 현수가 C, B, D, A, G, E로 수업계획을 짜면 제대로 된 설계이지만
 * C, G, E, A, D, B 순서로 짰다면 잘 못 설계된 수업계획이 됩니다.
 *
 * 수업계획은 그 순서대로 앞에 수업이 이수되면 다음 수업을 시작하다는 것으로 해석합니다.
 * 수업계획서상의 각 과목은 무조건 이수된다고 가정합니다.
 * 필수과목순서가 주어지면 현수가 짠 N개의 수업설계가 잘된 것이면 "YES", 잘못된 것이면 "NO"를 출력하는 프로그램
 *
 * cf. 1줄에 한 줄에 필수과목의 순서가 주어집니다. 모든 과목은 영문 대문자
 * cf. 2줄부터 현수가 짠 수업설계가 주어집니다.(수업설계의 길이는 30이하)
 *
 * @param {*} needSubject 이수해야 필수과목의 순서
 * @param {*} plan 수강계획
 * @returns 수업설계가 잘된 것이면 "YES", 잘못된 것이면 "NO"
 */
function solution(needSubject, plan) {
  let answer = 'YES';
  let queue = needSubject.split('');
  // console.log(queue); // [ 'C', 'B', 'A' ]

  // 수강계획을 처음부터 끝까지 순회
  for (let subject of plan) {
    // console.log(subject); // 수강계획의 과목, C B D A G E

    // queue에 있는 과목이 수강계획에 들어있으면
    if (queue.includes(subject)) {
      // 수강계획의 앞에부터 과목과 필수 과목에 맨 앞에 꺼낸 과목이 다르면 'NO'
      if (subject !== queue.shift()) return 'NO';
    }
  }
  // console.log(queue); // 다 빠져나감, []

  // 필수과목을 안들어서, 필수과목이 남아있으면 'NO'
  if (queue.length > 0) return 'NO';
  return answer;
}

console.log(solution('CBA', 'CBDAGE'));
