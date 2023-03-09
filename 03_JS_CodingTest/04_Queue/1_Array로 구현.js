class Queue {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor() {
    this.queue = []; // 요소를 넣을 배열 변수
    this.front = 0; // front 포인터
    this.rear = 0; // rear 포인터
  }
  // 📝 넣기
  enqueue(value) {
    // 실행노드[rear변수 증감] = 입력받은 값
    this.queue[this.rear++] = value;
  }

  // 📝 빼기
  dequeue() {
    const value = this.queue[this.front]; // 실행노드[front값]을 받아오기
    delete this.queue[this.front]; // 실행노드의 front 삭제
    this.front += 1;
    return value;
  }

  // 📝 큐의 가장 앞에 있는 노드 반환
  peek() {
    return this.queue[this.front];
  }

  // 📝 큐의 크기 반환
  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
queue.enqueue(8);
console.log(queue.size()); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 4
