/** https://school.programmers.co.kr/learn/courses/30/lessons/42583
 *
 * @param {*} bridge_length
 * @param {*} weight
 * @param {*} truck_weights
 * @returns
 *
 * while{} 안에서 time++를 하여 타이머를 잰다.
 * 그리고 while{} 안에서 1초 동안 발생하는 이벤트를 표현
 */
function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const bridge = new Array(bridge_length).fill(0); //다리 모형
  let sumOnBridge = 0; //다리 위 무게 합

  do {
    time++;
    let out = bridge.shift();
    if (out > 0) sumOnBridge -= out;
    if (sumOnBridge + truck_weights[0] <= weight) {
      let truckIn = truck_weights.shift();
      bridge.push(truckIn);
      sumOnBridge += truckIn;
    } else bridge.push(0);
  } while (sumOnBridge > 0);

  return time;
}
