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
const spanCounterNode = document.querySelector('.main-scope__del-btn span');



checkboxes.forEach((item) => {
  item.addEventListener('change', () => {
    let importantTask = false;
    if (item.checked) {
      item.closest('.main-scope__item').classList.add('checked-item');
      item.closest('.main-scope__item').querySelector('.main-scope__btn').setAttribute('disabled', true);

    } else {
      item.closest('.main-scope__item').classList.remove('checked-item');
      item.closest('.main-scope__item').querySelector('.main-scope__btn').removeAttribute('disabled');
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
})

