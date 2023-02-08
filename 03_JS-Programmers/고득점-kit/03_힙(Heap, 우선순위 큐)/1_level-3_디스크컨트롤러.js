/** https://school.programmers.co.kr/learn/courses/30/lessons/42627
 *
 * @param {*} jobs
 * @returns
 *
 * 우선순위큐에 "in" 이벤트가 발생할 때, 큐.sort(콜백)으로 원하는 요소를 기준으로 정렬
 * (콜백 사용)
 *
 * 원래 배열에서 "out" 이벤트가 발생할 때,
 * array베타 = array알파.reduce()로 다음 턴에 접근시 시간을 줄이기
 */
function solution(jobs) {
  let time = 0;
  let sum = 0;
  const divide = jobs.length;
  const waiting = [];

  while (jobs.length > 0 || waiting.length > 0) {
    jobs = jobs.reduce((acc, curr) => {
      if (curr[0] <= time) {
        waiting.push(curr);
        waiting.sort((a, b) => a[1] - b[1]);
      } else acc.push(curr);
      return acc;
    }, []);

    if (waiting.length > 0) {
      let out = waiting.shift();
      time += out[1];
      sum += time - out[0];
    } else time++;
  }

  return Math.floor(sum / divide);
}
