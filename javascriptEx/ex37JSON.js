const nabi = {
  "kind": "고양이",
  "age": 10,
  "name": "나비",
  "callOwner": undefined
}

nabi.callOwner();


// JSON : 객체 문법으로 구조화된 데이터 교환 형식 , 파이썬, 자바, 혹은 다른 여러 언어들에서 데이터 교환 형식으로 많이쓴다
const jsonData = JSON.stringify(nabi);

console.log(nabi);
console.log(typeof nabi);
console.log(jsonData);
console.log(typeof jsonData); // 문자열


const fs = require('fs'); // node.js fileSystem의 약자 : 내장 모듈 import 
const path = require('path');
const data = fs.readFileSync(path.join(__dirname, "ex38myJson.json"));
console.log(data);
// 직렬화 / 역직렬화 
const dataObj = JSON.parse(data);
// console.log(__dirname);
// console.log(__filename);
console.log(dataObj);
console.log("--------------")
console.log(dataObj[0]);
console.log(dataObj[0].toy[0]);
console.log(dataObj[0].owner);
console.log(dataObj[0].owner.name);

// 직렬화 => 외부시스템도 이해할수있는 언어로 변경시켜주는것 : String 
const dataString = JSON.stringify(dataObj);
console.log(dataString);