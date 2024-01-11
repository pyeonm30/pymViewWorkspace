// 산술연산자 
console.log( 10+3);
console.log( 10-3);
console.log( 10*3);
console.log( 10/3); // java는 정수 / 정수 => 정수가 나오는데 : JS 정수 / 정수 => 실수 
console.log( 10%3);
console.log(Math.pow(10,3)); // 거듭제곱 10*10*10
console.log( 10 ** 3); // 거듭제곱 

console.log(2 - "test"); // NaN
console.log(10 / 0); // Infinity  : 자바에서는 에러 뜬다 
console.log( 0 / 10); // 0 
 
// String 의 종류 ""(쌍따옴표: 더블쿼테이션) ''(홑따옴표: 싱글쿼테이션) ``(백틱 : 키보드 1옆에 ~ 표 있는거 그냥 누르면 됨 )

let intro ='박연미 \n 입니다 \\ ';
console.log(intro);
intro ="'박연미' 입니다 ";
console.log(intro);
intro ='"박연미" 입니다';
console.log(intro);

// `` 스트링 템플릿을 만들수있다 
const name="박연미";
const job="강사";
intro = `저는 ${name} 입니다 직업은 ${job}입니다`;

console.log(intro);

// boolean 타입은 동일하다 

let isDead = true;
console.log(isDead);
console.log(!isDead);
console.log(!!isDead);

// falsy value 

console.log(!!0); // 숫자 0 
console.log(!!""); // 문자 빈문자열 
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);


// truly value 

console.log(!!10); // 0 제외한 모든 숫자 
console.log(!!-10.123); // 음수도 동일
console.log(!!"test"); // 비어있지 않는 모든 문자 
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
