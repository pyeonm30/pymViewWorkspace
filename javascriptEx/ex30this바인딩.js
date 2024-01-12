// this 값은 자바와 다르게 자바스크립트는 변동이있다 => 해결하기 위해 나온 메서드 
// this값을 우리가 설정해줄수 있음 
// Funcation 객체안에 있는 메서드 
// 각 메서드의 첫번째 인자값은 내가 설정해주고 싶은 this 값이 들어온다 
// 1. apply()
// 2. call()
// 3. bind()

function printName() {
  // this 가 최상위 객체 (window, global )


  return this?.name || '이름이 없습니다 ';
}
console.log(printName());

const cat = {
  name: '나비'
}

console.log(printName.call(cat)); // 원래는 최상이 객체의 주소값인데 -> this를 cat의 주소값으로 변경후 실행 
console.log(printName.apply({ name: '박연미' }));

function addAll(x, y, z) {
  return `${this?.name ||'이름이 없습니다 '} 결과값 : ${x + y + z} `
}
console.log(addAll(1, 2, 3));
console.log(addAll.call(cat, 4, 5, 6));
console.log(addAll.apply(cat, [10, 20, 30]));

// call -> ,(쉼표 = 콤마) 를 기반으로 매개인자값을 순서대로 넘겨준다 
// apply -> 배열를 기반으로 매개인자값을 넘겨준다 

// call, apply => 함수를 즉시 실행한다 
// bind()  => 내가 원할때 실행한다 : this만 셋팅해놈 

const dog = {
  name: '멍멍이'
}

const printdogName = printName.bind(dog); // this가 바인딩된 함수를 리턴한다 

const printaddAll = addAll.bind(dog, 10, 20, 30);
console.log(printdogName());
console.log(printaddAll());