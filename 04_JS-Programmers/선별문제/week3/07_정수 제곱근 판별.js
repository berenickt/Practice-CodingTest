function temperature(num) {
  if (num >= 24) {
    console.log('조금 덥습니다.');
  } else if (num >= 19 && num <= 23) {
    console.log('날씨가 좋네요');
  } else if (num <= 18) {
    console.log('조금 춥네요.');
  }
}

function temperature2(num) {
  if (num <= 18) {
    console.log('조금 춥네요.');
  } else if (num <= 23) {
    console.log('날씨가 좋네요.');
  } else {
    console.log('조금 덥습니다.');
  }
}
