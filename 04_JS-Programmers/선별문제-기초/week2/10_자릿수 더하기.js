function countLetter(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      count = count + 1;
    }
  }
}

function countLetter2(str) {
  let count = 0;

  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      count++;
    }
  }
}
