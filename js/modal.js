const connectButton = document.querySelectorAll('.connect__button');
const modal = document.querySelector('.modal');
const writeButton = document.querySelectorAll('.write__button');
const popup = document.querySelector('.popup');

const closeButton = document.querySelectorAll('.close__btn');
const blur = document.querySelector('.blurdiv');
const buttons = blur.querySelectorAll('button');

const closeWindow = (button, window) => {
    button.addEventListener('click', () => {
        buttons.forEach(button => {
            button.classList.add('button__dis');
            button.disabled = false;
        });
        document.body.style.overflow = 'visible';
        blur.classList.remove('blur');
        window.style.display = 'none';
    });
};

const toggleWindow = (button, window) => {
    button.addEventListener('click', () => {
        buttons.forEach(button => {
            button.classList.remove('button__dis');
            button.disabled = true;
        });
        document.body.style.overflow = 'hidden';
        blur.classList.add('blur');
        window.style.display = 'flex';
    });
};

connectButton.forEach(button => toggleWindow(button, modal));
writeButton.forEach(button => toggleWindow(button, popup));

closeButton.forEach(button => closeWindow(button, modal));
closeButton.forEach(button => closeWindow(button, popup));
