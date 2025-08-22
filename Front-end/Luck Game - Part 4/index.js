const gameBoard = function () {
    let timerId = null;
    let turn = 0; // 0 -> player-1 turns,   1 -> player-2 turns
    const totalStep = document.querySelectorAll(".box").length - 1;
    const remainingStep = {
        playerOneStep: totalStep,
        playerTwoStep: totalStep,
    };

    function getRemainingStep(player) {
        return remainingStep[player];
    }

    function updatePlayerCell(player, step) {
        const previousCell = totalStep - getRemainingStep(player);
        const allCell = document.querySelectorAll(".box");

        // remove person icon from the previous location.
        Array.from(allCell[previousCell].children).forEach((element) => {
            if (player === "playerOneStep" && element.id === "player-1") {
                allCell[previousCell].removeChild(
                    document.getElementById("player-1")
                );
            } else if (
                player === "playerTwoStep" &&
                element.id === "player-2"
            ) {
                allCell[previousCell].removeChild(
                    document.getElementById("player-2")
                );
            }
        });

        // move person-icon to the current position(cell)
        const presentCell = previousCell + step;
        remainingStep[player] = totalStep - presentCell;

        // player === 'playerOneStep' ? allCell[presentCell].appendChild(createPerson('player-1')) : allCell[presentCell].appendChild(createPerson('player-2'))

        const changedPlayerCell =
            player === "playerOneStep"
                ? createPerson("player-1")
                : createPerson("player-2");
        allCell[presentCell].appendChild(changedPlayerCell);
    }
    function clearTimer() {
        if (timerId !== null) {
            clearTimeout(timerId);
            timerId = null;
        }
    }

    function resetEverything() {
        remainingStep["playerOneStep"] = totalStep;
        remainingStep["playerTwoStep"] = totalStep;

        turn = 0;

        clearTimer();

    }

    function knowTurn() {
        return turn; // 0 -> player-1 turns,   1 -> player-2 turns
    }

    function changeTurns() {
        const players = Array.from(
            document.querySelector(".playerIdentity").children
        );
        // set the timer, so that the computer run it turns after the human
        if (turn === 0) {
            timerId = setTimeout(() => {
                // console.log('invoked 1sec later')
                rollDice();
            }, 1000);
        }

        turn = 1 - turn;

        players.forEach((player, index) => {
            if (turn === index) {
                player.classList.add("playerTurn");
            } else {
                player.classList.remove("playerTurn");
            }
        });
    }

    return {
        updatePlayerCell,
        getRemainingStep,
        resetEverything,
        changeTurns,
        knowTurn,
        clearTimer,
    };
};

const {
    updatePlayerCell,
    getRemainingStep,
    resetEverything,
    changeTurns,
    knowTurn,
    clearTimer,
} = gameBoard();

function diceCount(event) {
    const noOfDices = Number(event.target.value);
    const parentElement = document.querySelector(".allDiceContainer");
    parentElement.innerHTML = "";

    for (let diceNo = 1; diceNo <= noOfDices; diceNo++) {
        const newDice = document.createElement("div");
        newDice.setAttribute("class", "diceContainer");

        newDice.innerHTML = `
              <div class="dice">
                  <i class="fa-solid fa-dice" id="dice-${diceNo}"></i> 
              </div>
              <h5>Dice-${diceNo}</h5>
              `;
        parentElement.appendChild(newDice);
    }
}

function createPerson(personID) {
    const color = personID === "player-1" ? "#FFD43B" : "#ff01cc";

    const i = document.createElement("i");
    i.classList = "fa-solid fa-person-walking";
    i.setAttribute("style", `color: ${color}`);
    i.setAttribute("id", personID);

    return i;
}

function rollDice() {
    // console.log('button clicked')
    const diceCountInput = document.querySelector("#diceCount");
    if (diceCountInput.value === "") return; // first select the no of dices.

    diceCountInput.disabled === false && (diceCountInput.disabled = true) // disabled the input so that no one can further change the no of dices for current game

    let totalPoint = 0;
    for (let i = 1; i <= Number(diceCountInput.value); i++) {
        const dice = document.querySelector(`#dice-${i}`);

        // generate a textual face value of dice
        const randomNo = getRandomNumber();

        // add the value, to get the sum of all dice values
        totalPoint += getIntegerByText(randomNo);

        // modify the dice icon with the current face value
        modifyIconClass(dice.classList, randomNo);
    }

    const totalPointElement = document.getElementById("totalPoints");
    totalPointElement.textContent = totalPoint;

    const currentPlayer = knowTurn() ? "playerTwoStep" : "playerOneStep";

    // console.log('current player: and points : ',currentPlayer,totalPoint)

    // move player by total sum of dice value from the previous position
    const remainingStep = getRemainingStep(currentPlayer);
    // console.log('remaining : ',remainingStep)
    if (remainingStep >= totalPoint) {
        updatePlayerCell(currentPlayer, totalPoint);

        // checks game ends or not
        if (getRemainingStep(currentPlayer) === 0) {
            document.getElementById("result").textContent =
                (currentPlayer === "playerOneStep" ? "Human" : "Computer") +
                " wons";
            disableRollDiceButton(true);
            clearTimer();
            return;
        }
    }

    changeTurns();
}

function disableRollDiceButton(disable = false) {
    const rollButton = document.querySelector(".rollBtn");

    rollButton.disabled = disable ? true : false;
    rollButton.style.background = disable ? "gray" : "";
    rollButton.style.borderColor = disable ? "gray" : "";
    rollButton.style.color = disable ? "white" : "";
}

function getRandomNumber() {
    const possibleFaceVales = ["dice", "one", "two", "three", "four"];
    const index = Math.floor(Math.random() * 4) + 1;

    return possibleFaceVales[index];
}

function modifyIconClass(classList, newValue) {
    classList.forEach((className) => {
        if (className.includes("fa-dice")) {
            classList.remove(className);
            classList.add(`fa-dice-${newValue}`);
        }
    });
}

function getIntegerByText(text) {
    const number = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
    };

    return number[text];
}

function resetGame() {
    // window.location.reload()

    // manually reset everthing

    document.querySelector(".playerIdentity").innerHTML = "";
    document.querySelector(".playerIdentity").innerHTML = `
              <p class="playerTurn">
                  <i class="fa-solid fa-person-walking" style="color: #FFD43B;"></i> <span>Person 1</span>
              </p>
              <p>
                  <i class="fa-solid fa-person-walking" style="color: #ff01cc;"></i> <span>Person 2</span>
              </p>`;

    document.querySelector("#totalPoints").textContent = "0";

    document.querySelector("#result").innerHTML = "";

    document.querySelector(".gameBoard").innerHTML = "";
    document.querySelector(".gameBoard").innerHTML = `
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
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
              <div class="box relativePosition">
                  <span class="labelled">end</span>
              </div>`;

    resetEverything();

    // reset the input taking noOfDice to empty
    const diceCountInput = document.querySelector("#diceCount");
    diceCountInput.disabled = false;
    diceCountInput.value = "";

    // reset dice to initial state
    const diceContainer = document.querySelector(".allDiceContainer");
    diceContainer.innerHTML = `
          <div class="diceContainer">
              <div class="dice">
                  <i class="fa-solid fa-dice" id="dice-1"></i> 
              </div>
              <h5>Dice</h5>
          </div>
          `;

    // when reset button is clicked after a person wins the game
    disableRollDiceButton(false);
}

// this method is only defined for testing purpose
function getRemainingStepWrapper(player) {
    return getRemainingStep(player);
}
