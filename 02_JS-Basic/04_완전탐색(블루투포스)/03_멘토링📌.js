/**
 * cf. 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어
 * cf. 멘토가 멘티의 수학공부를 도와주는 것
 *
 * 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
 * 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면,
 * A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
 * M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램
 *
 * @param {*} test 첫 번째 줄에 N(1<=N<=20)과 M(1<=M<=10)인 2차원 배열
 * - 두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호
 * - 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현
 *
 * e.g. 만약 한 줄에 N=4이고, 테스트 결과가 3, 4, 1, 2라면
 * e.g. 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미
 * @returns 짝을 만들 수 있는 총 경우의 수
 *
 * 3번의 테스트에서 멘토가 멘티보다 등수가 앞서야 함
 *  * e.g. 입력 : 3행 4열인 2차원 배열
 * 4 3
 * 3 4 1 2
 * 4 3 2 1
 * 3 1 4 2
 * e.g. 출력 : 3
 */
function solution(test) {
  let answer = 0;
  let temp = []; // **** 뭐가 들어있는지 확인용
  const testCount = test.length;
  const studentNum = test[0].length;

  // **** 1번 학생부터 학생 수만큼 2중 순회
  for (let i = 1; i <= studentNum; i++) {
    for (let j = 1; j <= studentNum; j++) {
      // console.log(i, j); // 16가지 경우의 수
      let count = 0;

      // **** 1행부터 테스트 횟수만큼 순회
      for (let row = 0; row < testCount; row++) {
        let rankingI = 0;
        let rankingJ = 0;

        // **** 1등부터 학생수만큼
        for (let ranking = 0; ranking < studentNum; ranking++) {
          if (test[row][ranking] === i) rankingI = ranking;
          if (test[row][ranking] === j) rankingJ = ranking;
        }
        if (rankingI < rankingJ) {
          count++;
        }
      }
      if (count === testCount) {
        temp.push([i, j]); // **** 뭐가 들어있는지 확인용
        answer++; // 멘토가 모든 테스트에 통과했을 경우
      }
    }
  }
  console.log(temp); // **** 뭐가 들어있는지 확인용
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
