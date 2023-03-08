/**
 * 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.
 * num은 1이상의 자연수가 들어옵니다.
 * 만약 num이 5라면 1 + 2 + 3 + 4 + 5를 구해야 합니다.
 * - for을 이용해서 문제를 풀어야 합니다.
 */
function sum(num) {
  let count = 0;
  // i = i + 1
  for (let i = 1; i <= num; i++) {
    // count = count + i;
    count += i;
  }
  return count;
}

sum(5); // 15
sum(3); // 6
