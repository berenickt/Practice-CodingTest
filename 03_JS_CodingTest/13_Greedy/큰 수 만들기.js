// N이 백만이면 O(N), O(N log N)
// 큰 값이 나오면 이전 값 중 더 작은 값은 전부 삭제한다.
// 즉, 스택의 바닥에서부터 탑은 큰 수부터 작은 수로 나열이 되어야 한다.
function solution(number, k) {
  const stack = [];
  let count = 0; // 몇 개를 지웠는지

  // 입력받은 문자열만큼 순회하면서 지우기
  for (const item of number) {
    // k보다 count가 작거나 && 스택의 길이가 입력문자열보다 작은 동안
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count += 1;
    }
    stack.push(item); // 나머지 item은 stack에 넣기
  }
  // console.log(stack.join(''));

  // 9876543처럼 count가 k보다 작은 경우
  while (count < k) {
    stack.pop();
    count += 1;
  }
  return stack.join('');
}

// console.log(solution('1924', 2));
