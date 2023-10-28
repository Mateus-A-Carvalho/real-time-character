const textareaEl = document.querySelector('#textarea');
const totalEl = document.querySelector('.total');
const remaining = document.querySelector('.remaining');

textareaEl.addEventListener("input", () => {
  let text = textareaEl.value.length;
  let remainingCharacter = textareaEl.maxLength - textareaEl.value.length;
  totalEl.innerHTML = text;
  remaining.innerHTML = remainingCharacter;

  // if(remainingCharacter <= (remainingCharacter * 0.1)) {
  //   remaining.style.setProperty("----remaining-color", "red");
  // }
})