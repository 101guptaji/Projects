document.addEventListener('DOMContentLoaded', () => {
    createStars(8);
});

function createStars(count) {

    const trophy = document.querySelector('.trophy');
    const radius = 200; // Radius for circular path

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.textContent = '⭐';

        const angle = (i / count) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        star.style.transform = `translate(${x}px, ${y}px)`;
        star.style.transformOrigin = `${-x}px ${-y}px`;

        trophy.appendChild(star);
    }
}

// Game rules hide and show
const gameRule = document.querySelector('.game-rules');

const ruleBtn = document.querySelector("#rule-btn");
ruleBtn.addEventListener('click', () => {
    if (gameRule.classList.contains('inactive'))
        gameRule.classList.remove('inactive');
})

const crossBtn = document.querySelector("#cross_btn");
crossBtn.addEventListener('click', () => {
    if (!gameRule.classList.contains('inactive'))
        gameRule.classList.add('inactive');
})


// Play again button action
function playAgain() {
    window.location.href = './index.html';
}