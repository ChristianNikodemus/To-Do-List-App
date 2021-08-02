let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
  alert("Add a task!");
} else {
  $('#list').append(li);
}
