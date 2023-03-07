function solution(price, money, count) {
  let totalCost = 0;
  for (let i = 1; i <= count; i++) totalCost += price * i;
  return totalCost <= money ? 0 : totalCost - money;
}

function solution2(price, money, count) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += i * price;
  }
  return money > totalPrice ? 0 : totalPrice - money;
}
