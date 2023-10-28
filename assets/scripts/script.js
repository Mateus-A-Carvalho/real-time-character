const textareaEl = document.querySelector('#textarea');
const totalEl = document.querySelector('.total');
const remaining = document.querySelector('.remaining');

remaining.innerHTML = document.querySelector('#textarea').maxLength
totalEl.innerHTML = document.querySelector('#textarea').value.length;

