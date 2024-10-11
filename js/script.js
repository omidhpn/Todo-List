let $ = document;
let inputElem = $.querySelector('.form-control');
let ulElem = $.querySelector('.todos');
let pElem = $.getElementById('p');

inputElem.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (inputElem.value === '') {
      pElem.innerHTML = 'please write your Todo';
      pElem.style.display = 'block';
      setTimeout(function () {
        pElem.style.display = 'none';
      }, 4000);
    } else {
      let liElem = $.createElement('li');
      liElem.className = 'list-group-item d-flex justify-content-between align-items-center';
      
      // انیمیشن ظاهر شدن
      setTimeout(function () {
        liElem.classList.add('show');
      }, 10);

      let todoText = $.createElement('span');
      todoText.innerHTML = inputElem.value;
      let deleteIcon = $.createElement('i');
      deleteIcon.className = 'fa fa-trash-o delete';
      liElem.append(todoText, deleteIcon);
      ulElem.append(liElem);
      inputElem.value = '';

      deleteIcon.addEventListener('click', function () {
        // اضافه کردن انیمیشن حذف
        liElem.classList.add('deleting');
        setTimeout(function () {
          liElem.remove();
        }, 300); // زمان هماهنگ با duration انیمیشن حذف
      });
    }
  }
});
