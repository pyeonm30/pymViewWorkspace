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


    //자기의 매서드인 init을 실행하는 거
  }

  init() {

    this.listDom.innerHTML = "";
    document.querySelector("#addBtn").addEventListener("click", this.addTodo);
    this.getTodo();

    this.garbage.addEventListener("dragover", e => e.preventDefault());
    this.garbage.addEventListener("drop", e => { this.deleteTodo(e) });

  }


  // 로컬 스토리지에 저장되어있는 값을 가져온다 
  getTodo = () => {
    if (localStorage.getItem('todo_list')) {
      this.todoList = JSON.parse(localStorage.getItem('todo_list'));
    }
    if (this.todoList.length === 0) return;

    // 
    this.todoList.forEach(todo => {
      const dom = this.makeTodoDom(todo.idx, todo.title, todo.content);

      this.listDom.appendChild(dom);
      this.idx = todo.idx;
    });

  }

  //이벤트리스너용 매서드는 반드시 화살표함수로 지정해야 this바인딩에 문제가 없다.
  addTodo = () => {
    const title = this.titleInput.value;
    const content = this.contentInput.value;
    //1.여기서 title === "" 또는 content === "" 이면 alert으로 경고를 띄우고 삽입되지 않게
    if (title.trim() === "" || content.trim() === "") {
      alert('필수값이 비어있습니다.');
      return;
    }
    //DOM을 만들어서 listDom의 자식으로 넣어준다.
    const idx = ++this.idx;
    const dom = this.makeTodoDom(idx, title, content);


    this.todoList.push({ idx, title, content });
    this.listDom.appendChild(dom);
    //2. 여기서 삽입이 된 후에는 titleInput과 contentInput에 입력한on 내용이 지워지도록
    this.titleInput.value = "";
    this.contentInput.value = "";
    this.showToast("글 작성이 완료되었습니다.")
    console.log(this.todoList);
    this.saveStorage();
  }

  makeTodoDom(idx, title, content) {
    let div = document.createElement("div");
    div.innerHTML =
      `<div class="item" data-idx="${idx}" draggable="true">
              <h4 class="title">${title}</h4>
              <span class="msg">${content}</span>
          </div>`;

    div.addEventListener("dragstart", e => {
      e.dataTransfer.setData("idx", idx);
    })
    return div;
  }

  showToast(msg) {
    this.msgBox.innerHTML = msg;
    this.msgBox.classList.add("on");
    setTimeout(() => {
      this.msgBox.classList.remove("on");
    }, 2000);
  }
  // 하지만 문제는 'localStorage에 배열은 사용하지 못한다'는 것

  //toDos 라는 배열의 내용을 localStorage에 넣기 위한 함수

  saveStorage() {
    this.todoList.length === 0 ? localStorage.removeItem('todo_list') : localStorage.setItem('todo_list', JSON.stringify(this.todoList));
  }

  deleteTodo = (e) => {
    const idx = e.dataTransfer.getData("idx");
    const target = this.todoList.find(x => x.idx === Number(idx));
    const itemList = [...document.querySelectorAll(".item")];
    const delItem = itemList.find(item => item.dataset.idx == idx);
    delItem.classList.add("off");
    setTimeout(() => {
      this.showToast("글 삭제가 완료되었습니다.")
      delItem.parentElement.remove();

    }, 400);

    this.todoList.splice(this.todoList.findIndex(obj => obj === target), 1);
    localStorage.setItem('todo_list', JSON.stringify(this.todoList));
  }


}
window.onload = function() {
  window.app = new App();

};