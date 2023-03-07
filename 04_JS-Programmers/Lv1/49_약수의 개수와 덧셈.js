function solution(left, right) {
  let answer = 0;
  for (let num = left; num <= right; num++) {
    answer = Number.isInteger(Math.sqrt(num)) ? answer - num : answer + num;
  }
  return answer;
}
