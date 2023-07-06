const btn = document.getElementById('generate');

btn.addEventListener('click', addColor);


function addColor() {

    const hexCode = '#' + Math.random().toString(16).slice(2, 8);
    const button = document.getElementById('color-band');
    button.style.background = hexCode;
    button.textContent = hexCode;
}

