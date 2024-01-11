// 코드를 DRY 하게 짜라
// D : don't R: repeat : y: yourself ==> 반복되는 코드는 함수로 만들어서 재사용해라 

function printArray(start, end) {
  if (isNaN(start) || isNaN(end)) return '숫자값을 넣어주세요 ';
  if (end < start) {
    let temp = start;
    start = end;
    end = temp;
  }
  let result = '';
  for (let i = start; i <= end; i += 1) {
    result += i + " ";
  }
  return result;
}

console.log(isNaN('test'));

console.log(printArray(1, 5));
console.log(printArray(6, 15));
console.log(printArray(15, 4));
console.log(printArray(1, 'test'));

// for (let i = 1; i <= 5; i += 1) {
//   console.log(i);
// }
// // 1 2 3 4 5 

// for (let i = 6; i <= 15; i += 1) {
//   console.log(i);
// }
// // 6 7 8 9 10 11 12 13 14 15 

// for (let i = 15; i >= 4; i -= 1) {
//   console.log(i);
// }

// // 4 5 6 7 8 9 10 11 12 13 14 15 