/**
 * 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여
 * 현수는 선생님이 주신 N개의 문제를 풀려고 합니다.
 * 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다.
 * 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.
 *
 * cf. 해당문제는 해당시간이 걸리면 푸는 걸로 간주한다
 * cf. 한 유형당 한개만 풀 수 있습니다
 * @param {*} timeLimit 제한시간, (10 <= 제한시간 <= 300)
 * @param {*} arr
 * @returns
 */
function solution(timeLimit, arr) {
  let dy = Array.from({ length: timeLimit + 1 }, () => 0); // 인덱스 0 ~ 20까지 유사배열 생성

  for (let i = 0; i < arr.length; i++) {
    let problemScore = arr[i][0];
    let problemTime = arr[i][1];

    // 뒤에서부터 순회해야 중복 적용을 피할 수 있습니다.
    for (let j = timeLimit; j >= problemTime; j--) {
      // i번째 문제를 풀었으니 걸리는 시간을 뺴고, 얻은 점수를 더하기
      dy[j] = Math.max(dy[j], dy[j - problemTime] + problemScore);
    }
  }
  return dy[timeLimit];
}

let arr = [
  // 문제를 풀었을 때의 점수, 푸는데 걸리는 시간
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr)); // 41

// 이 문제는 앞의 동전 문제와 달리, 중복적용이 안된다.
// 따라서, j가 뒤에서부터 작아지게 코드를 작성하면 된다. 이렇게 작성하면 중복적용이 되지 않는다!
