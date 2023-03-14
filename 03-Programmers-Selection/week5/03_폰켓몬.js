function solution(nums) {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums.length / 2 !== answer.length && answer.includes(nums[i]) === false) {
      answer.push(nums[i]);
    }
  }
  return answer.length;
}

// **** for : new Set
function solution2(nums) {
  const answer = new Set([]);

  for (let i = 0; i < nums.length; i++) {
    if (nums.length / 2 !== answer.size) {
      answer.add(nums[i]);
    }
  }
  return answer.size;
}

// **** forEach
function solution3(nums) {
  const pocket = [];

  nums.forEach(monster => {
    if (pocket.includes(monster) === false && pocket.length < nums.length / 2) {
      pocket.push(monster);
    }
  });
  return pocket.length;
}

// **** forEach : new Set
function solution4(nums) {
  const pocket = new Set([]);

  nums.forEach(monster => {
    if (pocket.size < nums.length / 2) {
      pocket.add(monster);
    }
  });
  return pocket.size;
}

// **** new Set
function solution5(nums) {
  const answer = new Set(nums).size;
  const limit = nums.length / 2;

  if (limit >= answer) return answer;

  return limit;
}
