/** https://school.programmers.co.kr/learn/courses/30/lessons/42840
 *
 * @param {*} answers
 * @returns
 *
 * 완전탐색은 사실상 코딩테스트에서 가장 많이 나오는 주제
 * 별도의 방법론이 필요없고, 모든 경우의 수를 검증해주기만 하면 됨
 */
function solution(answers) {
  let max = 0;
  const picks = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const pickCycles = [5, 8, 10];

  return answers
    .reduce(
      (acc, cur, idx) => {
        pickCycles.forEach((cycle, i) => {
          if (picks[i][idx % cycle] === cur) acc[i] += 1;
        });
        return acc;
      },
      [0, 0, 0]
    )
    .reduce((acc, cur, idx) => {
      if (cur > max) {
        max = cur;
        acc = [idx + 1];
      } else if (cur === max) acc.push(idx + 1);
      return acc;
    }, []);
}

// ------------------------------------------------------------
function solution2(answers) {
  const pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0];

  answers.forEach((answer, i) => {
    for (let j = 0; j < pattern.length; j++) {
      const patternLength = pattern[j].length;
      if (answer === pattern[j][i % patternLength]) scores[j]++;
    }
  });

  const answer = [];
  const maxScore = Math.max(...scores);
  scores.forEach((score, i) => {
    if (score === maxScore) answer.push(i + 1);
  });
  return answer;
}
