const arr = [1, 2, 3];
console.log(arr);

// 4 가 끝에 추가
arr.push(4); // O(1)

// 여러 개를 한 번에 추가
arr.push(5, 6); // O(1)
console.log(arr);

// 3번 인덱스에 128을 추가
arr.splice(3, 0, 128); // O(n)
console.log(arr);

// 3번 인덱스 값을 제거
arr.splice(3, 1); // O(n)
console.log(arr[3]);
