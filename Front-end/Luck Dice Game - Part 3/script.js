let positions = [0, 0];
let turn = 0;
const p1 = document.createElement("i");
const p2 = document.createElement("i");
p1.classList.add("fa-solid");
p1.classList.add("fa-person-running");
p1.classList.add("yellow");

p2.classList.add("fa-solid");
p2.classList.add("fa-person-running");
p2.classList.add("purple");

function rollDice() {
    if (positions[0] >= 9 || positions[1] >= 9) return;
    const d1 = Math.floor(Math.random() * 4) + 1;
    const d2 = Math.floor(Math.random() * 4) + 1;
    const total = d1 + d2;

    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");

    dice1.replaceChildren();
    dice2.replaceChildren();

    dice1.appendChild(getDiceIcon(d1));
    dice2.appendChild(getDiceIcon(d2));
    document.getElementById("totalPoints").textContent = total;

    if (positions[turn] + total <= 9) {
        // console.log(positions[turn], turn);
        const cells = document.getElementsByClassName("cell");
        const childToRemove = cells.item(positions[turn]).children[0];

        // console.log(cells.item(positions[turn]));
        if (childToRemove) {
            cells.item(positions[turn]).removeChild(childToRemove);
        }

        positions[turn] += total;
        cells.item(positions[turn]).appendChild(childToRemove);
        if (positions[turn] === 9) {
            document.getElementById("result").textContent = `Person-${turn + 1} wons`;
            document.querySelector(".rollBtn").disabled = true;
        }
    }

    toggleTurn();
}

function getDiceIcon(value) {

    const diceIcons = ["fa-dice","fa-dice-one", "fa-dice-two", "fa-dice-three", "fa-dice-four"];
    const icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add(diceIcons[value]);
    return icon;
}

function toggleTurn() {
    if (positions[0] >= 9 || positions[1] >= 9) return;
    turn = 1 - turn;
    document.getElementById("p1").classList.toggle("playerTurn", turn === 0);
    document.getElementById("p2").classList.toggle("playerTurn", turn === 1);
}

function resetGame() {
    document.getElementById("p1").classList.add("playerTurn");
    document.getElementById("p2").classList.remove("playerTurn");
    document.getElementById("totalPoints").textContent = "0";
    document.getElementById("result").textContent = "";
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");

    dice1.replaceChildren();
    dice2.replaceChildren();

    dice1.appendChild(getDiceIcon(0));
    dice2.appendChild(getDiceIcon(0));

    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < 2; i++){
        const childToRemove = cells.item(positions[i]).children[0];

        if (childToRemove) {
            cells.item(positions[i]).removeChild(childToRemove);
        }

        positions[i] = 0;
        cells.item(positions[i]).appendChild(childToRemove);
    }
    
    turn = 0;
    document.querySelector(".rollBtn").disabled = false;
}
