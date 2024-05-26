const okBtn = document.querySelector('#okBtn');
const cancelBtn = document.querySelector('#cancelBtn');

let okCounter = 0;
let cancelCounter = 0;

okBtn.addEventListener('click', () => {
    okBtn.innerHTML = `Okay (${++okCounter})`;
});

cancelBtn.addEventListener('click', () => {
    cancelBtn.innerHTML = `Cancel (${++cancelCounter})`;
});