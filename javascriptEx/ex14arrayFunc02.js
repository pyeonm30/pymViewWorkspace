// 고차함수 => 콜백함수를 사용한다 

// 콜백함수는 보통 화살표 함수를 많이 쓴다 

let array = [3, 5, 8, 6, 7, 11, 15, 14, 22];

// 데이터를 처음부터 끝까지 한개씩 차례대로 꺼내온다 
// array.forEach(function (n) {
//   console.log(n)
//   return;
// });

// 이렇게 되어있는것 
// array.forEach((n) => {
//   return console.log(n);
// });

// array.forEach(n => console.log(n));

//문제1  짝수만 출력 
array.forEach(n => {
  if (n % 2 == 0) console.log(n)
})
// map() 데이터 셋을 가공해서 반환 시켜준다 
let result = array.map(x => x * 100);
console.log(result);
console.log(array);