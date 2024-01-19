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
  init() {
    document.querySelector('#addBtn').addEventListener('click', this.addTodo);
    this.getStorage();

  };
  // 로컬스토리에서 저장되는 값 가져오는것 
  // todo값 추가하는 것 
  addTodo = () => {
    const title = this.titleInput.value;
    console.log(title);
    const content = this.contentInput.value;
    console.log(content);
    if (title.trim() === "" || content.trim() === "") {
      alert("필수 값이 비어있습니다");
      return;
    }
    const idx = ++this.idx;
    const div = this.makeTodoDom(idx, title, content);

    this.todoList.push({ idx, title, content });
    this.listDom.appendChild(div);

    this.titleInput.value = "";
    this.contentInput.value = "";
    this.showMsg('글 작성이 완료되었습니다');
    console.log(this.todoList);
    this.saveStorage();
    // const obj = {
    //   idx : idx,
    //   title: title,
    //   content: content
    // }


  }
  // html에서 dom 객체 만드는것 

  makeTodoDom(idx, title, content) {
    let div = document.createElement("div");
    div.innerHTML = `<div class="item" data-idx='${idx}' draggale='true'>
    <h4 class="title">${title}</h4>
    <span class="msg">${content}</span>
    </div>`;

    div.addEventListener("dragstart", e => {
      e.dataTransfer.setData("idx", idx);
    })

    return div;
  }

  // 로컬스토리지 추가하기 
  saveStorage() {
    localStorage.setItem('todo_list', JSON.stringify(this.todoList));
  }

  //로컬스토리지에 값 가져오기 
  getStorage() {
    if (!localStorage.getItem('todo_list')) return;
    this.todoList = JSON.parse(localStorage.getItem('todo_list'));
    this.todoList.forEach(todo => {
      const div = this.makeTodoDom(todo.idx, todo.title, todo.content);
      this.listDom.appendChild(div);
      this.idx = todo.idx;
    })

  }

  //todo값 삭제하기 

  showMsg(msg) {
    this.msgBox.innerHTML = msg;
    this.msgBox.classList.add("on");
    setTimeout(() => {
      this.msgBox.classList.remove("on");
    }, 2000);
  }

}

const app = new App();