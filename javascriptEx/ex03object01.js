// const 하는 것은 상수이지만 
// 참조변수가 상수면 새로운 주소값으로 변경은 불가능하지만 안에 있는 값은 변경가능하다.
// 리터럴 객체 
const dog = {
  name: "바둑이",
  age: 3
}
const dog2 = {
  name: "바둑이",
  age: 3
}

// dog = {
//   name: "흰둥이"
// }
console.log(dog);

//얕은 복사 : 주소값 공유 
const otherDog = dog;
otherDog.owner = {
  name: "제임스",
  age: 34
};

console.log(dog);
console.log(otherDog);

console.log("---------------------");

// 깊은 복사 
const anotherDog = {
  ...dog // { name: '바둑이', age: 3, owner: { name: '제임스', age: 34 }(주소값 ) }
};
otherDog.name = "흰둥이";
anotherDog.owner.name = "존";
console.log(dog);
console.log(otherDog);
console.log(anotherDog);