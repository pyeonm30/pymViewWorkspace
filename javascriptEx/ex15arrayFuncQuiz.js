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
  age: 1
};

let pets = [cat, dog, rabbit, hamster, cat];

pets.forEach(obj => console.log(obj));

// 1. 동물의 kind 가 개 인것을 찾아라 

// 2. 동물의 kind 가 고양이가 아닌것만 빼서 배열로 만들어라 

// 3. 총 동물의 평균 나이를 구해라 

// 4.동물 나이순으로 내림차순 정렬 : 기존 배열 건드리지 않는다 