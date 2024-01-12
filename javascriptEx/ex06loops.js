// while, for, do while 

let i = 1;
while (i <= 10) {
  console.log(i);
  i += 1;
}
i = 100;
do {
  if (i == 99) {
    i -= 1;
    continue;
  }
  console.log(i)
  if (i == 95) {
    break;
  }
  i -= 1;
} while (i > 90);


// for - in : key 출력하는 for문 : 배열에서 키는 index 출력 , 객체 key 는 key가 나오는것 

let array = [10, 20, 30, 40, 50, 60]; // 왠만하면 어레이에 같은 타입만 쓰자!! 

for (let i in array) {
  console.log(i);
}
console.log('----------------')

// for - of : iterable 한 객체만 사용할 수 있다 : looping 할 수 있는 타입만 가능하다 
// 객체는 사용 못하고 배열만 사용할 수 있다.

// 자바에서 향상된 for문과 같아 

// for(int num : array) {} 
for (let i of array) {
  console.log(i);
}

let dog = {
  name: '바둑이',
  age: 5,
  owner: {
    name: "박연미"
  }
}

for (let key in dog) {
  // console.log('key = ', key, " , value=", dog[key]);
  console.log(`key =  ${key}  , value= ${dog[key]}`);
}
console.log('----------------')
// for (let key of dog) {
//   console.log(key);
// }