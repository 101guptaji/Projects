// scores on page loading
let userScore = localStorage.getItem("userScore") ? JSON.parse(localStorage.getItem("userScore")) : 0;
let pcScore = localStorage.getItem("pcScore") ? JSON.parse(localStorage.getItem("pcScore")) : 0;

const userScoreTag = document.querySelector(".your-score");
const pcScoreTag = document.querySelector(".comp-score");
userScoreTag.innerHTML = userScore;
pcScoreTag.innerHTML = pcScore;

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

function nextClick() {
    window.location.href = './hurrayPage.html';
}

function playAgain() {
    window.location.href = './index.html';
}

function choiceClicked(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const pcChoice = choices[Math.floor(Math.random() * 3)];

    // user win
    if (userChoice === 'scissors' && pcChoice === 'paper') {
        userScore++;
        userScoreTag.innerHTML = userScore;
        localStorage.setItem("userScore", JSON.stringify(userScore));

        window.location.href = "./userWin.html?win=scissors";
    }
    else if (userChoice === 'paper' && pcChoice === 'rock') {
        userScore++;
        userScoreTag.innerHTML = userScore;
        localStorage.setItem("userScore", JSON.stringify(userScore));

        window.location.href = "./userWin.html?win=paper";
    }
    else if (userChoice === 'rock' && pcChoice === 'scissors') {
        userScore++;
        userScoreTag.innerHTML = userScore;
        localStorage.setItem("userScore", JSON.stringify(userScore));

        window.location.href = "./userWin.html?win=rock";
    }

    // pc win
    if (pcChoice === 'scissors' && userChoice === 'paper') {
        pcScore++;
        pcScoreTag.innerHTML = pcScore;
        localStorage.setItem("pcScore", JSON.stringify(pcScore));

        window.location.href = "./userLoss.html?win=scissors";
    }
    else if (pcChoice === 'paper' && userChoice === 'rock') {
        pcScore++;
        pcScoreTag.innerHTML = pcScore;
        localStorage.setItem("pcScore", JSON.stringify(pcScore));

        window.location.href = "./userLoss.html?win=paper";
    }
    else if (pcChoice === 'rock' && userChoice === 'scissors') {
        pcScore++;
        pcScoreTag.innerHTML = pcScore;
        localStorage.setItem("pcScore", JSON.stringify(pcScore));

        window.location.href = "./userLoss.html?win=rock";
    }

    // tie
    if (pcChoice === 'scissors' && userChoice === 'scissors') {
        window.location.href = "./tie.html?tie=scissors";
    }
    else if (pcChoice === 'paper' && userChoice === 'paper') {
        window.location.href = "./tie.html?tie=paper";
    }
    else if (pcChoice === 'rock' && userChoice === 'rock') {
        window.location.href = "./tie.html?tie=rock";
    }
}

function winPageLoad() {
    const scissorWin = document.querySelector("#scissors-win");
    const paperWin = document.querySelector("#paper-win");
    const rockWin = document.querySelector("#rock-win");

    const urlParams = new URLSearchParams(window.location.search);
    const winValue = urlParams.get('win');

    console.log(winValue);

    if (winValue === 'scissors') {
        if (scissorWin.classList.contains('inactive'))
            scissorWin.classList.remove('inactive');
        if (!paperWin.classList.contains('inactive'))
            paperWin.classList.add('inactive');
        if (!rockWin.classList.contains('inactive'))
            rockWin.classList.add('inactive');
    }
    else if (winValue === 'paper') {
        if (paperWin.classList.contains('inactive'))
            paperWin.classList.remove('inactive');
        if (!scissorWin.classList.contains('inactive'))
            scissorWin.classList.add('inactive');
        if (!rockWin.classList.contains('inactive'))
            rockWin.classList.add('inactive');
    }
    else {
        if (rockWin.classList.contains('inactive'))
            rockWin.classList.remove('inactive');
        if (!paperWin.classList.contains('inactive'))
            paperWin.classList.add('inactive');
        if (!scissorWin.classList.contains('inactive'))
            scissorWin.classList.add('inactive');
    }
};

function tiePageLoad() {
    const scissorWin = document.querySelector("#scissors-tie");
    const paperWin = document.querySelector("#paper-tie");
    const rockWin = document.querySelector("#rock-tie");

    const urlParams = new URLSearchParams(window.location.search);
    const tieValue = urlParams.get('tie');

    console.log(tieValue);

    if (tieValue === 'scissors') {
        if (scissorWin.classList.contains('inactive'))
            scissorWin.classList.remove('inactive');
        if (!paperWin.classList.contains('inactive'))
            paperWin.classList.add('inactive');
        if (!rockWin.classList.contains('inactive'))
            rockWin.classList.add('inactive');
    }
    else if (tieValue === 'paper') {
        if (paperWin.classList.contains('inactive'))
            paperWin.classList.remove('inactive');
        if (!scissorWin.classList.contains('inactive'))
            scissorWin.classList.add('inactive');
        if (!rockWin.classList.contains('inactive'))
            rockWin.classList.add('inactive');
    }
    else {
        if (rockWin.classList.contains('inactive'))
            rockWin.classList.remove('inactive');
        if (!paperWin.classList.contains('inactive'))
            paperWin.classList.add('inactive');
        if (!scissorWin.classList.contains('inactive'))
            scissorWin.classList.add('inactive');
    }
}