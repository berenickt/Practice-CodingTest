/**
 * 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램
 * @param {*} num - 자연수 N (1<=N<=10)
 * @returns
 */
function solution(num) {
  let answer = [];

  // ** 체크여부 확인용 배열
  // 전부 0으로 초기화해놨다가,
  // 원소가 포함되면 1, 안들어가면 0
  let check = Array.from({ length: num + 1 }, () => 0);

  function DFS(Node) {
    // 종착점이면
    if (Node === num + 1) {
      let temp = '';

      for (let i = 1; i <= num; i++) {
        // 체크되었으면, 문자열로 누적
        if (check[i] === 1) temp += i + ' ';
      }
      // 값이 있으면, 맨 뒤 공백제거해서 정답 배열에 넣기
      if (temp.length) answer.push(temp.trim());
    }
    // 체크(1)면 왼쪽, 논체크(0)면 오른쪽
    else {
      // 왼쪽
      check[Node] = 1;
      DFS(Node + 1);

      // 오른쪽
      check[Node] = 0;
      DFS(Node + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3)); // [ '1 2 3', '1 2', '1 3', '1', '2 3', '2', '3' ]
