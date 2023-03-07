// **** https://school.programmers.co.kr/learn/courses/30/lessons/12969
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const nums = data.split(' ');
  const n = Number(nums[0]),
    m = Number(nums[1]);

  let result = '';
  // 2차원으로 접근
  // 세로 길이만큼 반복
  for (let i = 0; i < m; i++) {
    // 가로 길이만큼 별 더하기
    for (let j = 0; j < n; j++) {
      result += '*';
    }
    // 가로가 끝나면 줄내림
    result += '\n';
  }
  console.log(result);
});

/** 직접 출력
 * 5와 3이 주어지면 5열3행의 별 찍기
 * @param {*} a
 * @param {*} b
 * @returns
 */
function solution(a, b) {
  return Array(b)
    .fill() // b 크기만큼 빈 배열
    .map(() => '*'.repeat(a)) // 요소마다 *를 a만큼 반복
    .join('\n'); // 개행
}

console.log(solution(5, 3));
