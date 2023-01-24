class Node {
  // 생성자: new 키워드로 객체를 생성할때 자동으로 호출되는 함수
  constructor(value) {
    this.value = value; // 값
    this.next = null; // 포인터
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // head 포인터
    this.tail = null; // tail 포인터
  }

  // 📝 해당하는 값 찾기
  find(value) {
    let currNode = this.head; // 입력받은 연결리스트의 Head 포인터 가져오기
    // 입력한 값을 찾을 때까지 다음 노드로 순회
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode; // 값을 찾으면 해당 노드를 반환
  }

  // 📝 끝에 추가
  append(newValue) {
    const newNode = new Node(newValue); // 입력받은 값으로 노드 생성
    // 헤드가 비어있다면
    if (this.head === null) {
      // head와 tail에 생성한 노드를 가리킴
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 값이 존재하면, 다음 노드로 생성한 노드를 가리킴
      // tail은 생성한 노드를 가리킴
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 📝 중간에 추가
  insert(node, newValue) {
    const newNode = new Node(newValue); // 입력받은 값으로 노드 생성
    newNode.next = node.next; // (생성한 노드의 다음)을 (입력받은 노드의 다음)을 가리킴
    node.next = newNode; // (입력받은 노드의 다음)을 (새로 생성한 노드)를 가리킴
  }

  // 📝 삭제
  remove(value) {
    let prevNode = this.head; // 입력받은 연결리스트의 Head 포인터 가져오기
    // 입력한 값을 찾을 때까지 다음 노드로 순회
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    // 값을 찾고 다음이 null이 아니라면
    if (prevNode.next !== null) {
      // (이전 노드의 다음)을 (다음의 다음)을 가리킴
      // 그러면 중간 노드가 아무 노드를 가리키고 있지 않기 때문에 GC에 의해 메모리 상에서 삭제
      prevNode.next = prevNode.next.next;
    }
  }

  // 📝 출력
  display() {
    let currNode = this.head;
    let displayString = '[';
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display(); // [1, 2, 3, 5]
console.log(linkedList.find(3));
// Node { value: 3, next: Node { value: 5, next: null } }

linkedList.remove(3);
linkedList.display(); // [1, 2, 5]
linkedList.insert(linkedList.find(2), 10);
linkedList.display(); // [1, 2, 10, 5]
