function oldPet(kind, name, age) {
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
// 클래스 : 속성(인스턴스 변수) : 행동 (메서드 :함수 )

class Pet {
  // Pet(){} 자바는 기본 생성자가 있다 
  // kind; 
  // name;
  // age;
  constructor(kind, name, age) {
    this.kind = kind;
    this.name = name;
    this.age = age;
  }

  info = () => {
    console.log(` ----- ${this.kind}-------`);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  }
}

const cat = new Pet('고양이', '다주', 10);
const dog = new Pet('강아지', '다롱', 12);

console.log(cat);
console.log(dog);

cat.info();
dog.info();