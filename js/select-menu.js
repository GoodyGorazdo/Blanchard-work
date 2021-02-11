// document.addEventListener('DOMContentLoaded', function() {

//   document.addEventListener('click', function(ev) {
//     if (!ev.target.classList.contains('select__gallery--header')) {
//       document.querySelectorAll('.gallery__select').forEach(function(clickdel1) {
//         clickdel1.classList.remove('is-active')
//       });
//     }
//   });
// });
let select = function () {
  let selectHeader = document.querySelectorAll('.gallery-content-select__head');
  // отменен выбор эементов списка
  let selectItem = document.querySelectorAll('.gallery-content-select__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }


  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.gallery-content-select'),
          currentText = select.querySelector('.gallery-content-select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');

  }
};

select();
