const input = document.querySelector('#favchap');
const buton = document.querySelector('buttonn');
const list = document.querySelector('_________');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;
delteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);