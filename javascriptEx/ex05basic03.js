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

test = (1000).toString();
console.log(typeof test);
console.log(test + 1000);
let test2 = (true).toString();
console.log('10' !== 10); // === !==
console.log(true == test2);

// 숫자를 문자로 바꾸는것  
let num1 = num + ''; // 묵시적(암묵적) 형변환 
num1 = num1.toString(); // 명시적 형변환 

// 문자를 숫자로 바꿔주는것 

let num2 = '10';
num2 = +num2; // 문자 앞에다가 부호 붙이는거 
num2 = num2 * 1;
num2 = parseInt('100');

const englishDay = 'saturday';

let koreanDay;

switch (englishDay) {
  case 'monday':
    koreanDay = '월요일';
    break;
  case 'tuesday':
    koreanDay = '화요일';
    break;
  case 'wednesday':
    koreanDay = '수요일';
    break;
  case 'thursday':
    koreanDay = '목요일';
    break;
  case 'friday':
    koreanDay = '금요일';
    break;
  default:
    koreanDay = '주말';
    break;
}

console.log(koreanDay);

// 단축 평가 : || 모든 비교연산자 중에 하나로도 참이면 참 => 한개가 참이면 나머지 비교 x 건너뛴다 
//          : && 모든 비교연산자 중에 하나로도 거짓 이면 거짓 => 한개가 거짓이면 나머지 비교 x 건너뛴다 

// 멈춘 시점에 있는 값만 출력함 

console.log(true || '박연미');
console.log(false || '박연미');

console.log(true && '박연미');
console.log(false && '박연미');

console.log(true && false && '박연미');
console.log(true || false || '박연미');