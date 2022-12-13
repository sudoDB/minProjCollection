/* To-Do list App, with name and detail for adding tasks. button next to each task to delete it from the list */
var todoList = document.createElement('div');
todoList.innerHTML = '<h1>To-Do List</h1>';
document.body.appendChild(todoList);

var todoForm = document.createElement('form');
todoForm.innerHTML = '<input type="text" name="name" placeholder="Name" />' +
  '<input type="text" name="detail" placeholder="Detail" />' +
  '<input type="submit" value="Add" />';
todoList.appendChild(todoForm);

var todoListItems = document.createElement('ul');
todoList.appendChild(todoListItems);


todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var todoListItem = document.createElement('li');
  todoListItem.innerHTML = todoForm.name.value + ': ' + todoForm.detail.value +
    '<button>Delete</button>';
  todoListItems.appendChild(todoListItem);
  todoForm.name.value = '';
  todoForm.detail.value = '';
});

todoList.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'button') {
    todoListItems.removeChild(event.target.parentNode);
  }
});