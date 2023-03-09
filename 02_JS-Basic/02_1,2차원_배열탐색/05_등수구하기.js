/**
 * N(1<=N<=100)명의 학생의 국어점수가 입력되면,
 * 각 학생의 등수를 입력된 순서대로 출력하는 프로그램
 *
 * cf. 같은 점수가 입력될 경우 높은 등수로 동일 처리
 * cf. 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다
 *
 * @param {*} arr 각 학생의 점수 배열
 * @returns 각 학생들의 등수 배열
 *
 * 1. arr의 길이만큼 모모든 요소가 1로 초기화된 배열 생성
 * 2. arr의 길이만큼 반복하는 2중 for문
 * 2-1. i 요소보다 큰 점수를 발견하면, 해당 i 인덱스의 등수를 ++
 */
function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1); // 모든 요소가 1로 초기화된 배열 생성

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
