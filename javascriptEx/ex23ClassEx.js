// Counter 라는 클래스를 만들고 value 변수를 캡슐화 하기 
// public increase() 메서드 통해서 value 값을 증가시키기 
// 예외조건 set 통해서 value 수정할때 음수값은 들어가지 않게 설정 :
// 음수 들어오면 기본값 0으로 변경

class Counter {
  #value;
  constructor(start) {
    if (start < 0 || isNaN(start)) {
      console.log('올바르지 않은 값 범위 입력 : 0 이상값 입력 ');
      this.#value = 0;
    } else {
      this.#value = start;
    }

  }
  static createCounter(start) {
    if (isNaN(start)) return null;
    if (start < 0) {
      console.log("음수 값은 넣을 수 없습니다 ");
      return null;
    }
    return new Counter(strat);
  }

  get value() {
    return this.#value;
  }
  increase() {
    this.#value += 1;
  }
  set value(value) {
    this.#value = value < 0 ? 0 : value;
  }
}

//let test = new Counter('test'); // new 라는 키워드는 무조건 객체를 생성한다 

let test = Counter.createCounter('test');
console.log(test);

const counter1 = new Counter(-100);

const counter = new Counter(5);
console.log(counter);
console.log(counter.value);
counter.increase();
counter.increase();
counter.increase();
console.log(counter.value);

counter.value = -100;
console.log(counter.value);