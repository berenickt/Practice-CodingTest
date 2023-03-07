function solution2(n, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    // console.log(x.toString().split('')); // 각 배열 원소마다 문자단위로 쪼갬
    // console.log(
    //   x
    //     .toString()
    //     .split('')
    //     .reduce((acc, cur) => acc + Number(cur), 0)
    // );
    // **** 배열 각 원소마다 (문자)단위로 (분할하고) (더함)
    let sum = x
      .toString()
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0);

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

console.log(solution2(7, [128, 460, 603, 40, 521, 137, 123]));
