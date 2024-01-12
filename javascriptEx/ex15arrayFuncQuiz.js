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
  eat: function () {
    console.log('해바라기씨를 먹는다 ')
  }
};


let pets = [cat, dog, rabbit, hamster, cat];

// pets.forEach(obj => console.log(obj));

// 1. 동물의 kind 가 개 인것을 찾아라 
let res = pets.find(obj => obj.kind === '개');
console.log(res);

// 2. 동물의 kind 가 고양이가 아닌것만 빼서 배열로 만들어라 
res = pets.filter(obj => obj['kind'] !== '고양이');
console.log(res);


// 3. 총 동물의 평균 나이를 구해라 => 총합 => 갯수로 나눠기 
res = pets.reduce((sum, obj) => sum + obj.age, 0)
console.log(res / pets.length, '살');

// 4.동물 나이순으로 내림차순 정렬 : 기존 배열 건드리지 않는다 
res = [...pets]; // 깊은 복사 => 구조분해를 해서 가져온다 

res.sort((obj1, obj2) => obj1.age > obj2.age ? -1 : 1);
console.log(res);