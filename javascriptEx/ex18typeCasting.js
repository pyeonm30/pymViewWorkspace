// 암묵적 타입변환

'1' + 2; // '12'
1 + '2'; // '12'

1 + true; // 2
1 + false; // 1

1 + null; // 1

1 + undefined; // NaN

// 명시적 타입 변환

// -----문자타입 형변환

// 1. String 생성자 함수
String(1); // "1"
String(NaN); // "NaN"
String(Infinity); // "Infinity"

String(true); // "true"
String(false); // "false"

// 2. Object.prototype.toString 메서드
(1).toString(); // "1"
NaN.toString(); // "NaN";
Infinity.toString(); // "Infinity"

true.toString(); // "true"
false.toString(); // "false"

// 3. 문자열 연결 연산자
1 + ''; // "1"

//-----숫자 타입으로 변환

// 1. Number 생성자 함수
Number('0'); // 0
Number('-1'); // -1
Number('10.53'); // 10.53

Number(true); // 1
Number(false); // 0

// 2. parseInt, parseFloat
parseInt('0'); // 0
parseInt('-1'); // -1
parseInt('10.53'); // 10
parseFloat('10.53'); // 10.53

// 3. 산술 연산자
+
'0'; // 0
'100' * 1;

// ---- 불리언 타입으로 변환

// 1. Boolean 생성자 함수
Boolean('x'); // true
Boolean(''); // false
Boolean('false'); // true

Boolean(0); // false
Boolean(1); // true
Boolean(NaN); // false
Boolean(Infinity); // true

Boolean(null); // false

Boolean(undefined); // false

Boolean({}); // true
Boolean([]); // true

// 2. !부정 연산자 이용
!!'x'; // true ( !(!'x') === !(false) -> true )

10 === '10';

console.log(NaN === NaN); // false
isNaN(NaN); // true

isNaN(10); // false
isNaN(1 + undefined); // true

let str = '박연미';
console.log(str[0], str.length); // 박 3
str[0] = '김';
console.log(str); // 박연미

str = '박연미';
str = '김연미'; // 재할당
console.log(str); // 김연미

let strArr = ['박', '연', '미'];
strArr[0] = '김';
console.log(strArr); //[ '김', '연', '미' ]