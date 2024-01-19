let cat = {
  kind: '고양이',
  age: 5
};
let dog = {
  kind: '개',
  age: 4
};
let rabbit = {
  kind: '토끼',
  age: 0.5
};
let hamster = {
  kind: '햄스터',
  age: 1,
  eat: function() {
    console.log('해바라기씨를 먹는다 ')
  }
};


let pets = [cat, dog, rabbit, hamster, cat];

// some, every 
let cnt = 0;

pets.forEach(pet => {
  console.log(cnt++)
  if (pet.kind === '개') return true;
})

console.log('--------------');

// 무조건 하나라도 true 값이 있으면 그즉시 중단 
cnt = 0;
let res = pets.some(pet => {
  console.log(cnt++)
  return pet.kind === '개';
})

console.log(res);
console.log('--------------');
// 무조건 전부 true 여야지만 true ,
// 중간에 false 있으면 그 즉시 중단 
cnt = 0;
res = pets.every(pet => {
  console.log(cnt++)
  return pet.kind === '개';
})

console.log(res);
console.log(cnt);