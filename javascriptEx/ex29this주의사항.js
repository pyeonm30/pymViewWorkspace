/*
    자바스크립트는 함수의 상위 스코프가 정의되는 시점에서 값을 접근할 수 있다 
*/

const cat = {
  name: '나비',
  age: 10,
  callOwner: function() {
    return `집사야 ${this.name} 배고파 밥줘`;
  }
}

console.log(cat);
console.log(cat.callOwner()); // this.callOwner

function Pet(name, age) {
  this.name = name;
  this.age = age;
  this.callOwner = function() {
    return `집사야 ${this.name} 배고파 밥줘`;

  }
}

const dog = new Pet('바둑이', 5);
console.log(dog.callOwner());

Pet.prototype.play = function() {
  return `${this.name}이가 터그 놀이를 한다`;
}
Pet.prototype.eat = function() {
  function eatWell() {
    return `${this.name}가 냠냠 쩝쩝 한다 `;
  }
  return eatWell();
}

console.log(Object.getOwnPropertyDescriptors(dog));
const hamster = new Pet('보스', 12);
console.log(Object.getOwnPropertyDescriptors(hamster.__proto__));

console.log(dog.play());
console.log(hamster.play());
console.log(dog.eat());

// this 키워드 
// 1. 일반함수를 호출할때는 this 가 최상위 객체다 global , window 
// 2. 메서드로 호출할땐 호출된 객체를 가르킨다.
// 3. new 키워드를 사용해서 객체를 생성했을땐 this 는 객체의 주소값이다 


function sayHi() {
  console.log("hi~~~ ");
  console.log(this);
  console.log(this === globalThis);
}


let sayHello = () => {
  console.log("hello~~~ ");
  console.log(this); // 지금 본인 실행 컨텍스트의 this 값이 된다 
  console.log(this === globalThis);
}

const test = {
  hi: sayHi,
  hello: sayHello,
  sayhihi: function() {
    console.log("hi hi hi hi hi ~~~ ");
    console.log(this);
    console.log(this === globalThis);
  },
  sayhoho: () => {
    console.log("ho ho ho ho ho ~~~ ");
    console.log(this);
    console.log(this === globalThis);
  }
}

console.log('-------- 1-------');
sayHi();
console.log('-------- 2-------');
sayHello();
//test.sayHi();
console.log('-------- 3-------');
test.hi();
console.log('-------- 4-------');
test.hello();
console.log('-------- 5-------');
test.sayhihi();
console.log('-------- 6-------');
test.sayhoho();