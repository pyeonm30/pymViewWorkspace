class App {
  constructor() {
    this.listDom = document.querySelector("#list");
    // this.todoList = []; //작업들을 저장하는 배열
    this.todoList = [];
    this.titleInput = document.querySelector("#title");
    this.contentInput = document.querySelector("#content");
    this.garbage = document.querySelector("#garbage");
    this.msgBox = document.querySelector(".msg-box");

    this.idx = 0;

    this.init();
  }
  // 초기 값 
  init() {};
  // 로컬스토리에서 저장되는 값 가져오는것 
  // todo값 추가하는 것 
  // html에서 dom 객체 만드는것 
  //todo값 삭제하기 

}

const app = new App();