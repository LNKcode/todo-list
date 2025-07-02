
function FunctionalTasks() {
  const btnsImoprtant = document.querySelectorAll('.main-scope__btn');

  btnsImoprtant.forEach((item) => {
    item.addEventListener('click', () => {
      item.closest('.main-scope__item').classList.toggle('important');
    })
  })

  const descItems = document.querySelectorAll('.main-scope__desc');

  descItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('done');
    })
  })

  const checkboxes = document.querySelectorAll('.main-scope__checkbox');
  const delBtnNode = document.querySelector('.main-scope__del-btn');
  const spanCounterNode = delBtnNode.querySelector('.main-scope__del-btn span');
  const notificationNode = document.querySelector('.notification');



  checkboxes.forEach((item) => {
    item.addEventListener('change', () => {
      let importantTask = false;
      let parentChekbox = item.closest('.main-scope__item')
      if (item.checked) {
        parentChekbox.classList.add('checked-item');
        parentChekbox.querySelector('.main-scope__btn').setAttribute('disabled', true);

      } else {
        parentChekbox.classList.remove('checked-item');
        parentChekbox.querySelector('.main-scope__btn').removeAttribute('disabled');
      }
      let checkedItems = document.querySelectorAll('.checked-item');
      spanCounterNode.textContent = `${checkedItems.length}`;
      checkedItems.forEach((item) => {
        if (item.classList.contains('important')) {
          importantTask = true;
        }
      })

      if (importantTask) {
        delBtnNode.setAttribute('disabled', true);
      } else {
        delBtnNode.removeAttribute('disabled');
      }
      if (checkedItems.length === 0) {
        delBtnNode.classList.add('hidden')
      } else {
        if (delBtnNode.classList.contains('hidden')) {
          delBtnNode.classList.remove('hidden')
        }
      }
    })
  })
  delBtnNode.addEventListener('click', () => {
    document.querySelectorAll('.checked-item').forEach((item) => {
      item.remove();
    })
    delBtnNode.classList.add('hidden')
    notificationNode.classList.add('visible');
    setTimeout(() => {
      notificationNode.classList.remove('visible');
    }, 5000)
  })
}
FunctionalTasks()

// скрипт для модалок 

const LOGIN = 'Igor'
const PASSWORD = '123123'

const modalLogin = document.querySelector('#modal-login');
const modalSubmit = modalLogin.querySelector('.form__submit');
const modalInputLogin = modalLogin.querySelector('#login');
const modalInputPassword = modalLogin.querySelector('#password');
const modalForm = modalLogin.querySelector('.form');

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (modalInputLogin.value === LOGIN && modalInputPassword.value === PASSWORD) {
    modalLogin.classList.add('modal--close')
  } else {
    alert('Попробуй с большой буквы Igor');
  }
})


// модалка для добавления задач 

const addTaskBtn = document.querySelector('.add__btn');
const modalTask = document.querySelector('#add')
const modalTaskCloseBtn = modalTask.querySelector('.modal__close');
const modalTaskOverlay = modalTask.querySelector('.modal__overlay')

function modalTaskClose() {
  modalTask.classList.add('modal--close');
}

addTaskBtn.addEventListener('click', () => {
  modalTask.classList.remove('modal--close');
})

modalTaskCloseBtn.addEventListener('click', modalTaskClose)

modalTaskOverlay.addEventListener('click', modalTaskClose)

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!modalTask.classList.contains('modal--close')) {
      modalTaskClose()
    }
  }
});

// добавление элементов 

const modalFormTask = modalTask.querySelector('.form');
const modalFormInputTask = modalTask.querySelector('.form__input');
const modalChekBoxTask = modalTask.querySelector('.form__checkbox');
const taskList = document.querySelector('.main-scope__list');

modalFormTask.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputValue = modalFormInputTask.value;
  const newTask = document.createElement('li');
  newTask.classList.add('main-scope__item');
  if (modalChekBoxTask.checked) {
    newTask.classList.add('important')
  }
  // let checkBoxValue = modalChekBoxTask.checked ? 'important' : '';
  newTask.innerHTML = `        
  <input type="checkbox" class="main-scope__checkbox">
  <p class="main-scope__desc">
    ${inputValue}
  </p>

  <button type="button" class="main-scope__btn">
    <svg fill="#212121" fill-rule="nonzero" width="40px" height="40px" viewBox="0 0 24 24" version="1.1"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path
        d="M12,17.0015 C13.3813,17.0015 14.5011,18.1213 14.5011,19.5026 C14.5011,20.8839 13.3813,22.0037 12,22.0037 C10.6187,22.0037 9.49888,20.8839 9.49888,19.5026 C9.49888,18.1213 10.6187,17.0015 12,17.0015 Z M11.999,2.00244 C14.1393,2.00244 15.8744,3.7375 15.8744,5.87781 C15.8744,8.71128 14.8844,12.4318 14.339,14.2756 C14.0294,15.322 13.0657,16.0039 12.0006,16.0039 C10.9332,16.0039 9.96846,15.3191 9.65995,14.2708 L9.43749451,13.4935787 C8.88270062,11.4994608 8.12366,8.3311 8.12366,5.87781 C8.12366,3.7375 9.85872,2.00244 11.999,2.00244 Z"
        id="🎨-Color">
      </path>
    </svg>
  </button>
`
  taskList.appendChild(newTask);
  modalFormInputTask.value = '';
  modalChekBoxTask.checked = false;
  modalTaskClose()
  FunctionalTasks()
})

