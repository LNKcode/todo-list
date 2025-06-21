const btnsImoprtant = document.querySelectorAll('.main-scope__btn');

btnsImoprtant.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('important');
  })
})

const checkboxes = document.querySelectorAll('.main-scope__checkbox');
const delBtnNode = document.querySelector('.main-scope__del-btn');
const spanCounterNode = document.querySelector('.main-scope__del-btn span');


checkboxes.forEach((item) => {
  item.addEventListener('change', () => {
    if (item.checked) {
      item.closest('.main-scope__item').classList.add('checked-item')
    } else {
      item.closest('.main-scope__item').classList.remove('checked-item')
    }
    let checkedItems = document.querySelectorAll('.checked-item').length;
    spanCounterNode.textContent = `${checkedItems}`;
    if (checkedItems === 0) {
      delBtnNode.classList.add('hidden')
    } else {
      if (delBtnNode.classList.contains('hidden')) {
        delBtnNode.classList.remove('hidden')
      }
    }
  })
})