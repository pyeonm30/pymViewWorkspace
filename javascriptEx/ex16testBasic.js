// 자바스크립트에서 랜덤으로 값을 가져오기 
console.log(Math.random()); // 무작위 1이하의 실수값
console.log(Math.random() * 10); // 0~ 9
console.log(Math.random() * 100); // 0~ 99 
// 1 ~100 
console.log(Math.random() * 10 + 1); //( 0~ 9) + 1 => 1 ~ 10


let num = parseInt(Math.random() * 2) - 5; // 0 1 
console.log(num);

function getRandNum(min, max) {
  return parseInt(Math.random() * (max - min + 1)) + min;
}

function checkNum(num) {
  return num % 2 == 0 ? `${num} 은 짝수` : `${num} 은 홀수`;
}
/*
    1. 1~100 사이의 숫자를 랜덤으로 저장하고 그수가 짝수인지
      홀수인지 출력하는 checkNum 함수를 만든후 호출 
*/
console.log(checkNum(getRandNum(1, 100)));
/*  
     2. 배열에 랜덤으로(-100 ~ 100 사이의 숫자를 4개를 저장후 전부 홀수인지 검사하는 
       isAllOddNum 함수를 만드시오 , 전부 홀수입니다, 아닙니다 
 */

function isAllOddNum() {
  let arr = [0, 0, 0, 0];
  for (idx in arr) {
    arr[idx] = getRandNum(-100, 100);
  }
  arr = [1, -3, -99, 1];
  console.log(arr);

  let cnt = arr.reduce((cnt, value) => {
    //console.log(`value = ${value} cnt = ${cnt}`);
    return value % 2 !== 0 ? cnt += 1 : cnt;
  }, 0);

  return cnt === arr.length ? '전부 홀수값입니다' : '홀수가 아닌 값이 있습니다';

}

console.log(isAllOddNum());