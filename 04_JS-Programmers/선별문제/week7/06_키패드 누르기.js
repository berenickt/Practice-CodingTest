function boolean(input1, input2) {
  if (input1 === false && input2 === false) {
    return false;
  } else if (input1 === true || input2 === true) {
    return true;
  }
}

function boolean2(input1, input2) {
  if (!input1 && !input2) {
    return false;
  } else if (input1 || input2) {
    return true;
  }
}
