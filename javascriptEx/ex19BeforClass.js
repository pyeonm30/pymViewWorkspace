// let cat = {
//   kind: '고양이',
//   name: '나비',
//   age: 2,
//   info: function () {
//     console.log(` ----- ${this.kind}-------`);
//     console.log(`이름 : ${this.name}`);
//     console.log(`나이 : ${this.age}`);
//   }
// }
// let dog = {
//   kind: '강아지',
//   name: '바둑이',
//   age: 12,
//   info: function () {
//     console.log(` ----- ${this.kind}-------`);
//     console.log(`이름 : ${this.name}`);
//     console.log(`나이 : ${this.age}`);
//   }
// }
// let hamster = {
//   kind: '햄스터',
//   name: '모찌',
//   age: 0.5,
//   info: function () {
//     console.log(` ----- ${this.kind}-------`);
//     console.log(`이름 : ${this.name}`);
//     console.log(`나이 : ${this.age}`);
//   }
// }

// 자바 모든게 클래스다 , 자바스크립트 모든게 함수다 
// 객체를 생성하는 함수 => 생성자 함수 무조건 첫글자 대문자로 한다 
function Pet(kind, name, age) {
  this.kind = kind;
  this.name = name;
  this.age = age;
  this.info = () => {
    console.log(` ----- ${this.kind}-------`);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  }
  // return this;
}

function test(name) {
  this.name = name;
}

// 화살표 함수랑 일반함수의 차이점 
// 일반 함수를 통해서 객체생성 => 생성자함수 내포한다 => 객체 생성가능하다 
// 화살표함수는 생성자 함수를 포함하지 않느다 => 객체 생성이 안된다 : 가볍다 , 순수 함수기능만 함 

// let arrFnc = (name, age) => {
//   this.name = name;
//   this.age = age;
// }

const nabi = new Pet('고양이', '다주', 10);
console.log(nabi);
const tObj = new test('테스트');
//const arrObj = new arrFnc('이름', 100);

console.log(tObj);
//console.log(arrObj);