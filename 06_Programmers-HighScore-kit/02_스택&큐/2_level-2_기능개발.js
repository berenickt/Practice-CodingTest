/** https://school.programmers.co.kr/learn/courses/30/lessons/42586
 *
 * @param {*} progresses
 * @param {*} speeds
 * @returns
 */
function solution(progresses, speeds) {
  let days = 0;

  return progresses
    .map((progress, i) => Math.ceil((100 - progress) / speeds[i]))
    .reduce((acc, curr) => {
      if (curr > days) {
        days = curr;
        acc.push(1);
      } else acc[acc.length - 1] += 1;
      return acc;
    }, []);
}
