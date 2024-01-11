// 비교연산자 
// == != > < <= >= 

// 자바랑 동일한 부분 
let num = 10;
console.log(num == 10)
console.log(num != 10)
console.log(num > 10)
console.log(num < 10)
console.log(num >= 10)
console.log(num <= 10)

// 자바스크립트에만 있는것 ===
console.log('-------------------')
console.log(num == '10'); //true : 값만 비교한다 
console.log(num === '10'); // 값 + type 을 비교한다
console.log(true == 'true'); // boolean 값은 안된다 

let number = 10;
let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

result = number += 1;

// 형변환 

// +  : 1) 산술연산자로써 더하기 , 2) 연결연산자  3) 부호로써 + 


number = '10';
console.log(number + 10); // 20 1010
console.log(+number + 10);
console.log(typeof + number); // 여기서 +는 부호로 인식 
console.log(typeof number);

let test = 10;
console.log(test + '' + 10);
console.log(typeof (test + ""));

console.log(typeof test);

// test = String.toString(1000);
// console.log(typeof test);
// console.log(test);