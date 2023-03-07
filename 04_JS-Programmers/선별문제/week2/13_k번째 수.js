function bigNum(str) {
  let biggest = 0;

  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) > biggest) {
      biggest = Number(str[i]);
    }
  }

  return biggest;
}

function bigNum2(str) {
  let biggest = Number(str[0]);

  for (let i = 1; i < str.length; i++) {
    if (Number(str[i]) > biggest) {
      biggest = Number(str[i]);
    }
  }

  return biggest;
}
