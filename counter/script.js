let heading = document.querySelector('#heading');

let btn = document.querySelector('#inc');

let count = 0;

btn.addEventListener('click', () => {
    count++;
    heading.textContent = count;
});