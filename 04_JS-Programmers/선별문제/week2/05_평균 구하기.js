function solution(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    // sum += arr[i]
  }
  return sum / arr.length;
  // 총합에서 배열의 길이 만큼 나눠주면 평균값
}
