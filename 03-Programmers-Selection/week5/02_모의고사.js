const answerTable = [
  // 1번 수포자가 찍는 방식 : 5개의 패턴
  [1, 2, 3, 4, 5],

  // 2번 수포자가 찍는 방식 : 8개의 패턴
  [2, 1, 2, 3, 2, 4, 2, 5],

  // 3번 수포자가 찍는 방식 : 10개의 패턴
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

/**
 * 수포자는 수학을 포기한 사람의 준말입니다.
 * 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
 * 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
 * 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 * 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
 * 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 *
 * @param {*} answers 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열
 * @returns 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return
 * cf. 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬
 */
function solution(answers) {
  // 학생들의 점수를 저장하는 배열
  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        score[l]++;
      }
    }
  }
  // 제일 많이 맞춘 문제의 수를 찾아온다.
  const biggest = Math.max(...score);

  const answer = [];
  for (let i = 0; i < score.length; i++) {
    if (biggest === score[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

function solution2(answers) {
  const scoreList = answerTable.map((el, i) => {
    const score = answers.reduce((acc, cur, l) => {
      return acc + (el[l % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score }; // score : score
  });

  // 최대로 맞춘 문제의 수를 가져온다.
  const biggest = Math.max(
    ...scoreList.map(el => {
      return el.score; // 결과값 : [5, 0, 0]
    }),
  );

  const answer = scoreList
    .filter(el => {
      return biggest === el.score;
    })
    .map(el => el.student);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
