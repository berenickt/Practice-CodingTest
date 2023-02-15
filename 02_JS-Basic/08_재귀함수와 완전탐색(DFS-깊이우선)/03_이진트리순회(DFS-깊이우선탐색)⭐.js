/**
 * 그림과 같은 이진트리의 전위순회, 후위 순회 연습
 * @param {*} num
 * @returns 이진트리 전위순회
 */
function solution(num) {
  let answer = '';

  function DFS(node) {
    if (node > 7) return;
    else {
      answer += node + ' ';
      DFS(node * 2); // 왼쪽
      DFS(node * 2 + 1); // 오른쪽
    }
  }

  DFS(num);
  return `전위 순회 : ${answer}`;
}

console.log(solution(1)); // 1 2 4 5 3 6 7

// ----------------------------------------------------------
function solution2(num) {
  let answer = '';

  function DFS(node) {
    if (node > 7) return;
    else {
      DFS(node * 2); // 왼쪽
      answer += node + ' ';
      DFS(node * 2 + 1); // 오른쪽
    }
  }

  DFS(num);
  return `중위 순회 : ${answer}`;
}

console.log(solution2(1)); // 4 2 5 1 6 3 7

// ----------------------------------------------------------
function solution3(num) {
  let answer = '';

  function DFS(node) {
    if (node > 7) return;
    else {
      DFS(node * 2); // 왼쪽
      DFS(node * 2 + 1); // 오른쪽
      answer += node + ' ';
    }
  }

  DFS(num);
  return `후위 순회 : ${answer}`;
}

console.log(solution3(1)); // 4 5 2 6 7 3 1
