// 객체끼리 공유하는 자원 // 객체 생성하지 않고 바로 접근 
// Student 클래스 만들어서 속성 id , name 만들어 주세요 printInfo id와 name 출력되게 
// static => 클래스 메서드, 클래스 변수 => 클래스 이름으로 접근한다 : 객체 생성없이 


// function Student(id, name){ static count =0;}
class Student {
  static count = 0; // 딱 한번만 만들어진다 : 객체들끼리 공유 
  constructor(id, name) {
    this.id = id;
    this.name = name;
    //this.count+=1;
    Student.count += 1;
  }

  printInfo = () => {
    console.log(` id : ${this.id} \t name : ${this.name}`);
  }

  // 스테틱 메서드 안에서는 static 변수만 사용하자 
  static getToalStudent = () => {
    console.log(`총 학생수는 ${Student.count} 명 `);
  }
}


const stu1 = new Student(2019122104, 'Park');
const stu2 = new Student(2019206028, 'Kim');
const stu3 = new Student(2019153237, 'Lee');

stu1.printInfo();
stu2.printInfo();
stu3.printInfo();

Student.getToalStudent();