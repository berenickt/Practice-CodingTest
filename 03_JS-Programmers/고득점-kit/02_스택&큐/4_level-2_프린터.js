/** https://school.programmers.co.kr/learn/courses/30/lessons/42587
 *
 * @param {*} priorities
 * @param {*} location
 * @returns
 *
 * 처음 input으로 받은 priorities
 * priorities의 index만 따로 뽑은 배열
 * 문제에서는 priorities에서 하나를 추출할 때 마다
 * 추출 지점의 앞 요소들이, 추출 지점 뒤쪽으로 옮겨진다.
 * 그리고 이 과정에서 index가 바뀌므로 기존의 index는 알 수 없게 된다.
 *
 * 단, end point 여부를 검증할 때 원래 index를 알아야 하므로
 * priorities가 바뀌더라도 원래 index는 꾸준히 들고 있어야 한다.
 * priorities가 뒤섞일 때, index 배열도 똑같이 뒤섞어주면 원래 index를 계속 알 수 있다!
 */
function solution(priorities, location) {
  let answer = 0;
  let index = priorities.map((v, i) => i);

  while (priorities.length > 0) {
    answer++;
    let maxIdx = priorities.indexOf(Math.max(...priorities));
    if (index[maxIdx] === location) return answer;
    priorities.splice(maxIdx, 1);
    priorities = priorities.concat(...priorities.splice(0, maxIdx));
    index.splice(maxIdx, 1);
    index = index.concat(...index.splice(0, maxIdx));
  }
}
