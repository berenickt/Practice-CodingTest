/**
 * 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어
 * 멘토가 멘티의 수학공부를 도와주는 것
 *
 * 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
 * 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면,
 * A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
 *
 * M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램
 * @param {*} test 첫 번째 줄에 N(1<=N<=20)과 M(1<=M<=10)인 2차원 배열
 * - 두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호
 * - 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현
 * - 만약 한 줄에 N=4이고, 테스트 결과가 3
 * @returns
 */
function solution(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
