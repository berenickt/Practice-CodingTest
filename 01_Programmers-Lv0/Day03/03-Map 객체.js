/** Map 객체
 * --- 키-값 쌍과 키의 원래 삽입 순서를 기억
 * set으로 맵 객체 삽입
 * get으로 맵 객체 조회
 * has로 해당 요소 존재 여부를 불리언 값으로 반환
 * delete로 삭제
 * clear로 맵 안의 프로퍼티 전부삭제
 */
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log(map1.get('a')); // 1

map1.set('a', 97);
console.log(map1.get('a')); // 97

console.log(map1.size); // 3

// **** delete로 삭제
map1.delete('b');
console.log(map1.size); // 2
