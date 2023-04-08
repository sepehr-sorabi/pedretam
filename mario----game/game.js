const mario = document.querySelector('#mario');
const scoreEl = document.querySelector('#score');

let score = 0;

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
        moveMario(10);
    } else if (event.code === 'ArrowLeft') {
        moveMario(-10);
    }
});

function moveMario(distance) {
    const marioPosition = parseInt(window.getComputedStyle(mario).getPropertyValue('left'));
    const containerWidth = document.querySelector('.game-container').offsetWidth;

    if (marioPosition + distance < 0 || marioPosition + mario.offsetWidth + distance > containerWidth) {
        return;
    }

    mario.style.left = marioPosition + distance + 'px';

    score++;
    scoreEl.textContent = score;
}
