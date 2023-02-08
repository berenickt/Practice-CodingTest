/** https://school.programmers.co.kr/learn/courses/30/lessons/42628
 *
 * @param {*} operations
 * @returns
 */
function solution(operations) {
  const numbers = [];
  while (operations.length > 0) {
    let out = operations.shift();
    switch (out) {
      case 'D 1':
        if (numbers.length > 0) numbers.pop();
        break;
      case 'D -1':
        if (numbers.length > 0) numbers.shift();
        break;
      default:
        numbers.push(parseInt(out.slice(2, out.length)));
        numbers.sort((a, b) => a - b);
        break;
    }
  }

  const answer = [];
  if (numbers.length > 0) answer.push(numbers.pop());
  else answer.push(0);
  if (numbers.length > 0) answer.push(numbers.shift());
  else answer.push(0);
  return answer;
}

// **** 힙
// 힙을 BFS식으로 나열했을 때, 오름차순or내림차순 정렬을 보장하지는 않는다!
// 단, 부모와 자손간의 관계가 확실하기 때문에 루트가 최댓값or최솟값인 것은 보장한다.

// ** 힙에 자료를 넣을 때
// - 마지막 index에 넣고(큐 맨 뒤에 넣듯)
// - 부모-자손 간 상향식 비교

// ** 힙에서 자료를 빼낼 때
// - 최댓값or최솟값인 루트만 빼낼 수 있고 (큐가 맨 앞을 꺼내듯)
// - 루트가 빈자리가 되면 맨 뒷 값을 빼서 가져온다.
// - 그리고 하향식으로 부모-자손간 비교를 한다.
// - 상향식, 하향식 비교가 발생하면 버블 소트와 같이 주체는 자신에게 맞는 자리를 찾아간다.
