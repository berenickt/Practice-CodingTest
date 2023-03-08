function makeNumber(num) {
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += i; // str = str + i;

    if (i !== num) {
      str += '-'; // str = str + "-"
    }
  }
}
