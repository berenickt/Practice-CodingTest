# filter : 리턴하는 값이 true인 것들만 모아서 새로운 배열을 반환

```js
배열.filter((value, index, array) => {});
```

# reduce : 첫번쟤 인수는 콜백함수

```js
배열.reduce((accumulator, currentValue, index, array) => {}, 초기값);
```

- 첫 번쨰 인수는 콜백함수
- 두 번쨰 인수는 초기값
- 콜백함수에는 4개의 인수로
  - 이전 반환값
  - 현재 값
  - 인덱스
  - 배열이 있습니다.
- 다른 메서드들과 달리 reduce는 하나의 결과값을 반환합니다.
