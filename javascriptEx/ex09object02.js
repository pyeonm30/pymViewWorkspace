// 자바스크립트 : 객체, 함수 

// 함수 
function sayHi() {
  console.log("helllo!")
}

sayHi();

let dog = {
  name: '바둑이',
  age: 4,
  owner: {
    name: '박연미'
  },
  toys: ['개뼉다구', '밧줄', '공'],
  callOwner: function () { // 메서드 : 객체 안에 있는 함수는 메서드라고 부른다 
    console.log(`${this.owner.name} 놀아줘! `);
  }
}


let cat = {
  name: '나비',
  age: 3,
  owner: {
    name: '제임스'
  },
  toys: ['캣잎', '방석', '낚시줄 '],
  callOwner: function () { // 메서드 : 객체 안에 있는 함수는 메서드라고 부른다 
    console.log(`${this.owner.name} 놀아줘! `);
  }
}

console.log(dog);
console.log(dog.owner.name);

console.log(dog.toys[1]);
dog.callOwner();

cat.callOwner();


let nameKey = 'name';
let nameValue = '흰둥이';
let ageKey = 'age';
let ageValue = 3;

const dog2 = {
  [nameKey]: nameValue,
  [ageKey]: ageValue
}
//console.log(dog2[age]);

console.log(dog2);

// 객체 안에 있는 모든 키값 다 가져오기 
console.log(Object.keys(cat));

// 객체 안에 있는 모든 value값 다 가져오기 
console.log(Object.values(cat));


// 외부에서 선언된 변수이름과 값을 둘다 그대로 사용하고 싶으면 그냥 넣으면됨 
const name = '토끼';
const age = 2;
const toys = ['당근', '나무뿌리', ' 톱니바퀴'];
// const rabbit = {
//   name: name
// }
const rabbit = {
  name,
  age,
  toys
}

console.log(rabbit);