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

