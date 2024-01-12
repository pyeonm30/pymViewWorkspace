const dog = {
  name: '바둑이',
  year: 2021,

  get age() {
    return new Date().getFullYear - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
}

// extensible : 확장 가능하는지 안하는지 알수 있다 
console.log(Object.isExtensible(dog));
Object.preventExtensions(dog);
console.log(Object.isExtensible(dog));
dog.toy = ['뼈다귀'];
console.log(dog);

delete dog.name;
console.log(dog);

//seal : 밀봉 :봉인하다 : 프로퍼티 추가 삭제 금지 , 값 변경 가능 
const cat = {
  name: '복다주',
  year: 2013,
  toy: null,
  get age() {
    return new Date().getFullYear - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
}

console.log(Object.isSealed(cat));
Object.seal(cat);
console.log(Object.isSealed(cat));

cat['toy'] = ['캣잎'];

console.log(cat);

delete cat['age'];

console.log(cat);

cat.name = '나비';

console.log(cat);

// Freezed 동결 : 읽기 외에 모든 기능 불가능한다 , 값 수정 삭제 , 프로퍼티 수정 삭제 
const hamster = {
  name: '푸틴',
  year: 2021,
  toy: ['쳇바퀴', '휴지심'],
  get age() {
    return new Date().getFullYear - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
}
console.log(Object.isFrozen(hamster));
Object.freeze(hamster); // 속성값이 원시값이 아니라 참조값이면 그 참조값의 값은 변경이 가능하다 
Object.freeze(hamster.toy); // 참조변수는 따로 다시 freeze 해야한다 

const test = [...hamster];
Object.isFrozen(test);
console.log(test);

hamster.year = 2024;
console.log(hamster);

hamster.toy[1] = '톱밥';
console.log(hamster);