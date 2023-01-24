const stack = [];

// push
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); // [ 1, 2, 3 ]

// pop
stack.pop();
console.log(stack); // [ 1, 2 ]

console.log(stack[stack.length - 1]); // 2
