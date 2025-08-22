const gameBoard = function () {
    let turn = 0;    // 0 -> player-1 turns,   1 -> player-2 turns
    const totalStep = document.querySelectorAll('.box').length - 1;
    const remainingStep = {
        playerOneStep: totalStep,
        playerTwoStep: totalStep,
    };

    function getRemainingStep(player) {
        return remainingStep[player];
    };

    function updatePlayerCell(player, step) {
        const previousCell = totalStep - getRemainingStep(player);
        const allCell = document.querySelectorAll('.box');

        // remove person icon from the previous location.
        Array.from(allCell[previousCell].children).forEach((element) => {
            if (player === 'playerOneStep' && element.id === 'player-1') {
                allCell[previousCell].removeChild(document.getElementById('player-1'));
            } else if (player === 'playerTwoStep' && element.id === 'player-2') {
                allCell[previousCell].removeChild(document.getElementById('player-2'));
            }
        })

        // move person-icon to the current position(cell)
        const presentCell = previousCell + step;
        remainingStep[player] = totalStep - presentCell;

        player === 'playerOneStep' ? allCell[presentCell].appendChild(createPerson('player-1')) : allCell[presentCell].appendChild(createPerson('player-2'))


    }

    function resetEverything() {
        remainingStep['playerOneStep'] = totalStep;
        remainingStep['playerTwoStep'] = totalStep;

        turn = 0;
    }

    function knowTurn() {
        return turn;    // 0 -> player-1 turns,   1 -> player-2 turns
    }

    function changeTurns() {
        const players = Array.from(document.querySelector('.playerIdentity').children);
        turn = 1 - turn;

        players.forEach((player, index) => {
            if (turn === index) {
                player.classList.add('playerTurn');
            } else {
                player.classList.remove('playerTurn');
            }
        })
    }

    return {
        updatePlayerCell, getRemainingStep, resetEverything, changeTurns, knowTurn,
    }
}

const { updatePlayerCell, getRemainingStep, resetEverything, changeTurns, knowTurn } = gameBoard();

function createPerson(personID) {

    const color = personID === 'player-1' ? '#FFD43B' : '#ff01cc';

    const i = document.createElement('i');
    i.classList = 'fa-solid fa-person-walking';
    i.setAttribute('style', `color: ${color}`);
    i.setAttribute('id', personID);

    return i;
}


function rollDice() {
    const dice1Value = getRandomNumber();
    const dice2Value = getRandomNumber();

    // getting icon element
    const dice1 = document.getElementById('dice-1').classList;
    const dice2 = document.getElementById('dice-2').classList;

    modifyIconClass(dice1, dice1Value);
    modifyIconClass(dice2, dice2Value)


    const totalPoint = getIntegerByText(dice1Value) + getIntegerByText(dice2Value);
    const totalPointElement = document.getElementById('totalPoints');
    totalPointElement.textContent = totalPoint;

    const currentPlayer = knowTurn() ? 'playerTwoStep' : 'playerOneStep';

    // move player by total sum of dice value from the previous position
    const remainingStep = getRemainingStep(currentPlayer);
    // console.log('remaining : ',remainingStep)
    if (remainingStep >= totalPoint) {
        updatePlayerCell(currentPlayer, totalPoint);
    } else {
        // we will do on it in future like we alert msg : try again
    }

    // checks game ends or not
    if (getRemainingStep(currentPlayer) === 0) {
        document.getElementById('result').textContent = (currentPlayer === 'playerOneStep' ? 'Person-1' : 'Person-2') + ' wons';
        disableRollDiceButton(true);
        return;
    }

    changeTurns();

}

function disableRollDiceButton(disable = false) {
    const rollButton = document.querySelector('.rollBtn');

    rollButton.disabled = disable ? true : false;
    rollButton.style.background = disable ? 'gray' : '';
    rollButton.style.borderColor = disable ? 'gray' : '';
    rollButton.style.color = disable ? 'white' : '';

}

function getRandomNumber() {
    const possibleMoves = ['dice', 'one', 'two', 'three', 'four'];
    const curMove = Math.floor(Math.random() * 4) + 1;

    return possibleMoves[curMove];
}

function modifyIconClass(classList, newValue) {
    classList.forEach(className => {
        if (className.includes('fa-dice')) {
            classList.remove(className);
            classList.add(`fa-dice-${newValue}`);
        }
    })
}

function getIntegerByText(text) {
    const number = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
    }

    return number[text];
}

function resetGame() {
    // window.location.reload()

    // manually reset everthing

    document.querySelector('.playerIdentity').innerHTML = ''
    document.querySelector('.playerIdentity').innerHTML = `
        <p class="playerTurn">
            <i class="fa-solid fa-person-walking" style="color: #FFD43B;"></i> <span>Person 1</span>
        </p>
        <p>
            <i class="fa-solid fa-person-walking" style="color: #ff01cc;"></i> <span>Person 2</span>
        </p>`

    document.querySelector('#totalPoints').textContent = '0';

    document.querySelector('#result').innerHTML = '';

    document.querySelector('.gameBoard').innerHTML = ''
    document.querySelector('.gameBoard').innerHTML = `
        <div class="box relativePosition">
            <span class="labelled">start</span>
            <i class="fa-solid fa-person-walking" style="color: #FFD43B;" id="player-1"></i>
            <i class="fa-solid fa-person-walking" style="color: #ff01cc;" id="player-2"></i>
        </div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box relativePosition">
            <span class="labelled">end</span>
        </div>`;

    resetEverything();

    // reset dice to initial state
    document.querySelector('#dice-1').className = 'fa-solid fa-dice';
    document.querySelector('#dice-2').className = 'fa-solid fa-dice';

    // when reset button is clicked after a person wins the game
    disableRollDiceButton(false);
}


// this method is only defined for testing purpose
function getRemainingStepWrapper(player) {
    return getRemainingStep(player);
}
