function solution(number, k) {
  const answer = number.split('').reduce((acc, curr) => {
    if (k > 0) {
      let i = acc.length - 1;
      while (i > -1 && k > 0 && acc[i] < curr) {
        acc.pop();
        k--;
        i--;
      }
    }
    acc.push(curr);
    return acc;
  }, []);

  return answer.slice(0, answer.length - k).join('');
}

// ---------------------------------------------------
const solution2 = (number, k) => {
  const stack = [];
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    const item = number[i];
    // stack이 초기에 비어있으면 push 한다.
    if (stack.length === 0) {
      stack.push(item);
      continue;
    }
    // stack에 쌓인 최근 값이 들어와야할 값보다 크거나 같을때까지 꺼낸다.
    while (stack[stack.length - 1] < item) {
      stack.pop();
      count++;
      // 만약 숫자를 빼야할만큼 뺐다면 완성된 값을 반환한다.
      if (count === k) return stack.join('') + number.slice(i, number.length);
      // 스택이 비어있으면 루프를 멈추고 스택에 아이템을 추가한다.
      if (stack.length === 0) break;
    }
    stack.push(item);
  }
  // 만약
  return stack.join('').slice(0, number.length - k + count);
};
