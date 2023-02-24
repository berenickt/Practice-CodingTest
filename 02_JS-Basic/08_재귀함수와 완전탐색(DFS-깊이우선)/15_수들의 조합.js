/**
 * num개의 정수가 주어지면 그 숫자들 중 pick개를 뽑는 조합의 합이
 * 임의의 정수 randomNum의 배수인 개수는 몇 개가 있는지 출력하는 프로그램
 *
 * e.g. 5개의 숫자 2 4 5 8 12가 주어지고,
 * 3개를 뽑은 조합의 합이 6의 배수인 조합을 찾으면,
 * (4 + 8 + 12 = 24), (2 + 4 + 12 = 18)로 2가지가 있습니다
 *
 * @param {*} num  3 <= num <= 20
 * @param {*} pick 2 <= pick <= num
 * @param {*} arr num개의 배열
 * @param {*} randomNum 임의의 정수
 * @returns num중 pick개 뽑는 조합의 합이 randomNum의 배수인 경우의 수
 */
function solution(num, pick, arr, randomNum) {
  let answer = 0;
  let temp = Array.from({ length: pick }, () => 0); // ** 확인용

  function DFS(level, start, sum) {
    if (level === pick) {
      // randomNum의 배수(6의 배수)이면, 경우의 수 추가
      if (sum % randomNum === 0) answer++;
      console.log(sum, temp); // ** 확인용
    } else {
      for (let index = start; index < num; index++) {
        temp[level] = arr[index]; // ** 확인용
        DFS(level + 1, index + 1, sum + arr[index]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

// 5개의 숫자 중 3개를 뽑는데, 6의 배수인 경우의 수
console.log(solution(5, 3, [2, 4, 5, 8, 12], 6)); // 2
