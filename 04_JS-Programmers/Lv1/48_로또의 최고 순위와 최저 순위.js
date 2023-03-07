function solution(lottos, win_nums) {
  const zeroCount = lottos.filter((e) => e === 0).length;
  const matchCount = win_nums.filter((e) => lottos.includes(e)).length;
  const matchToRank = [6, 6, 5, 4, 3, 2, 1];
  const lowRank = matchToRank[matchCount];
  const highRank = zeroCount === 6 ? 1 : matchToRank[matchCount + zeroCount];

  return [highRank, lowRank];
}

function solution2(lottos, win_nums) {
  let zeroCount = 0;
  let winCount = 0;
  lottos.forEach((item) => {
    if (item === 0) zeroCount++;
    else if (win_nums.includes(item)) winCount++;
  });
  let maxRank = Math.min(7 - (winCount + zeroCount), 6);
  let minRank = Math.min(7 - winCount, 6);
  return [maxRank, minRank];
}
