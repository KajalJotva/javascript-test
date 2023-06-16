'use strict';

let add = document.querySelector('.add');
let items = document.querySelector('.list');
let itemsCompeleted = document.querySelector('.list-completed');
let itemsInCompeleted = document.querySelector('.list-incompleted');
let container = document.querySelector('.container');
var divlist;

var pos = true;
add.addEventListener('click', function (e) {
  //tododiv
  let input = document.getElementById('intext').value;
  if (input == '') {
    var error = document.querySelector('.error');
    error.style.display = 'block';
  } else {
    var error = document.querySelector('.error');
    error.style.display = 'none';
    divlist = document.createElement('div');
    var liItems = document.createElement('li');
    var check = document.createElement('button');
    var tic = document.createTextNode('✓');
    check.appendChild(tic);
    check.classList.add('check');
    divlist.appendChild(check);

    var text = document.createTextNode(input);

    liItems.appendChild(text);
    liItems.contentEditable = false;
    divlist.appendChild(liItems);

    items.appendChild(divlist);
    var div = document.createElement('div');
    div.classList.add('btndiv');

    var edit = document.createElement('button');
    var remove = document.createElement('button');
    var btntext = document.createTextNode('Edit');
    var btnremove = document.createTextNode('Delete');
    edit.appendChild(btntext);
    remove.appendChild(btnremove);
    edit.classList.add('edit');
    remove.classList.add('btn');
    divlist.appendChild(div);
    divlist.classList.add('divlist');
    div.appendChild(edit);
    div.appendChild(remove);
    document.getElementById('intext').value = '';

    edit.addEventListener('click', function (e) {
      // console.log(e.target);
      // console.log(e.target.parentElement.parentElement.childNodes[0]);
      var editText = e.target.parentElement.parentElement.childNodes[1];

      // document.getElementById('intext').value = editText;
      editText.contentEditable = true;
      editText.classList.add('edittxt');
      add.addEventListener('click', function () {
        editText.contentEditable = false;
        editText.classList.remove('edittxt');
      });
    });
    remove.addEventListener('click', function (e) {
      console.log(e.target.parentElement.parentElement.remove());
    });

    check.addEventListener('click', function (e) {
      const todo = e.target.parentElement;
      todo.classList.toggle('completed');
      check.classList.toggle('back');
      itemsCompeleted.appendChild(todo);
    });
  }
});
