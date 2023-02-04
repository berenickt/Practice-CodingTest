class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue(); // 큐 생성

  // 대기목록만큼 순회
  for (let i = 0; i < priorities.length; i += 1) {
    // 각각의 우선순위와 인덱스
    queue.enqueue([priorities[i], i]);
  }
  // 내림차순 정렬
  priorities.sort((a, b) => b - a);

  let count = 0; // 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지

  // 큐가 비어있을 떄까지 반복
  while (true) {
    const currentValue = queue.peek(); // 가장 앞에 노드 반환

    // 지금까지 수행한 우선순위보다 작은 경우
    if (currentValue[0] < priorities[count]) {
      // 그 값을 맨 뒤에 넣기
      queue.enqueue(queue.dequeue());
    } else {
      // 우선순위가 더 큰 경우, 바로 dequeue
      const value = queue.dequeue();
      count += 1;

      // 뽑은 문서가 내가 찾은 문서라면
      if (location === value[1]) {
        return count;
      }
    }
  }
}
