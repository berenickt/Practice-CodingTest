class Node {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor() {
    this.top = null;
    this.size = 0;
  }
  // 추가
  push(value) {
    const node = new Node(value); // 입력받은 값으로 새 노드 생성
    node.next = this.top; // 새로 생성한 노드의 다음은 실행노드의 top을 가르킴
    this.top = node; // 실행노드의 top은 노드를 가르킴
    this.size += 1;
  }
  // 삭제
  pop() {
    const value = this.top.value; // 실행노드의 top의 value를 변수로
    this.top = this.top.next; // 실행노드의 top의 next를 top으로
    this.size -= 1;
    return value;
  }
  size() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
stack.push(4);
console.log(stack.pop()); // 4
console.log(stack.pop()); // 2
