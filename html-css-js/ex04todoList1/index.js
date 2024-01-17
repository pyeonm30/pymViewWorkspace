const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_btn');
let id = 1;

function addItem() {
  let content = String(input.value);
  if (content.trim().length == 0) {
    alert("값이 없습니다");
    input.value = '';
    input.focus();
    return;
  }
  const namelist = [...document.querySelectorAll('.item_name')];
  // alert(content)
  if (namelist.find(span => span.innerText === content)) {
    alert('이미 존재하는 값입니다');
    input.value = '';
    input.focus();
    return;
  }
  addToList(content);
  id += 1;
  input.value = '';
  input.focus();
}

function addToList(value) {
  const data = `<li class="item_row" data-id="${id}">
  <div class="item">
    <span class="item_name"> ${value} </span>
    <button class="item_delete"> <i class="fa-solid fa-trash-can" data-id="${id}"></i> </button>
  </div>
</li>`;
  items.innerHTML += data;
}

addBtn.addEventListener('click', addItem);