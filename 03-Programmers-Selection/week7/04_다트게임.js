const isBonus = ['S', 'D', 'T']; // 보너스를 구분하기 위해 배열에 저장

/** https://school.programmers.co.kr/learn/courses/30/lessons/17682
 *
 * @param {*} dartResult 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열
 * @returns 총점수
 */
function solution(dartResult) {
  const answer = [];

  let score = ''; // 점수만 뽑아서 저장하는 변수
  for (let i = 0; i < dartResult.length; i++) {
    if (isNaN(dartResult[i]) === false) {
      // 숫자 타입으로 변환한 데이터의 결과가 NaN 값이 아닌 경우 (= 숫자가 맞는 경우)
      score += dartResult[i];
    } else {
      // 숫자 타입으로 변환한 데이터의 결과가 NaN 값이 맞는 경우 (= 숫자가 아닌 경우)
      if (isBonus.includes(dartResult[i])) {
        // 보너스 처리 ("S", "D", "T")
        score = Number(score);

        if (dartResult[i] === 'D') {
          // score = score ** 2; // 더블일 경우에는 2제곱
          score = Math.pow(score, 2);
        } else if (dartResult[i] === 'T') {
          score = score ** 3; // 트리플일 경우에는 3제곱
        }
        answer.push(score);
        score = '';
      } else {
        // 옵션 처리 ("*", "#")
        if (dartResult[i] === '#') {
          // 아차상일 경우 : 해당 점수를 마이너스 한다.
          answer[answer.length - 1] *= -1;
        } else {
          // 스타상일 경우 : 해당 점수에 2를 곱한다.
          answer[answer.length - 1] *= 2;

          // 현재 게임이 2번째 게임 이상일 경우에만
          if (answer.length > 1) {
            // 앞에 있는 점수까지 2배로 만들어준다.
            answer[answer.length - 2] *= 2;
          }
        }
      }
    }
  }
  return answer.reduce((acc, cur) => acc + cur);
}

/**
 * ferEach
 */
function solution2(dartResult) {
  let score = ''; // 문자열에 있는 점수 데이터를 저장
  let currentScore = 0; // 현재 게임(턴)의 점수를 저장
  let last = false; // 점수를 최종 저장할 시점을 찾음

  const answer = dartResult
    .split('')
    .reduce((acc, cur, i) => {
      if (isNaN(cur) === false) {
        // 점수를 먼저 뽑는다.
        score += cur;
        last = false; // 새 게임이 시작되었다.
      } else if (isBonus.includes(cur)) {
        // 보너스 처리
        score = Number(score);
        const squared = isBonus.indexOf(cur) + 1;

        currentScore = score ** squared;
        score = ''; // 점수를 저장하는 변수를 초기화

        if (
          isNaN(dartResult[i + 1]) === false ||
          i + 1 === dartResult.length // 마지막 데이터 체크
        ) {
          last = true; // 현재 게임이 여기까지 종료되었다.
        }
      } else {
        last = true;
        // 옵션 처리
        if (cur === '*') {
          // 스타상이라면
          currentScore *= 2;

          if (acc.length > 0) {
            acc[acc.length - 1] *= 2;
          }
        } else {
          // 아차상이라면
          currentScore *= -1;
        }
      }

      if (last) {
        // 턴이 종료되었다면 최종적으로 점수를 저장
        acc.push(currentScore);
      }
      return acc;
    }, [])
    .reduce((acc, cur) => acc + cur);
  return answer;
}
