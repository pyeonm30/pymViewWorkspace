const cat = {};
// 모든 객체에 존재하는 속성값 : object 상속받은값 
console.log(cat.__proto__); // __proto__ 부모 클래스에 해당된다 
// 프로토타입 체인  [].__proto__ -> Array.__proto__ -> Object 

function Pet(name, age) {
  this.name = name;
  this.age = age;
}
console.log(Pet.prototype);
console.dir(Pet.prototype, { showHidden: true });

console.log(Pet.prototype.constructor === Pet);
console.log(Pet.prototype.constructor.prototype === Pet.prototype);

const dog = new Pet('바둑이', 3);
// circular reference 
console.log(dog.__proto__ === Pet.prototype);
console.log(Pet.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

// 객체의 모든 프로퍼티를 출력할 수 있다.
console.log(Object.getOwnPropertyDescriptors(dog));

// configurable: false => 다시 defineProperty 를 할 수가 없다 
Object.defineProperty(dog, 'name', { writable: false, enumerable: false });
console.log(Object.getOwnPropertyDescriptors(dog));

console.log(Object.keys(dog));


Object.defineProperties(dog, {
  name: {
    value: '흰둥이',
    writable: true,
    enumerable: true,
    configurable: false
  },
  age: {
    value: 10,
    writable: false,
    enumerable: true,
    configurable: false
  }

})

console.log(Object.getOwnPropertyDescriptors(dog));