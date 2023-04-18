import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";

let currentPlayer = "circle";

const changingPlayer = document.querySelector("img");
if (currentPlayer === "circle") {
  changingPlayer.src = "circle.svg";
}

//nastavení hráče
const playing = (event) => {
  const turn = event.target.classList;

  if (currentPlayer === "circle") {
    turn.value = "board__field--circle";
    currentPlayer = "cross";
    event.target.disabled = true;
    changingPlayer.src = "cross.svg";
  } else {
    currentPlayer === "cross";
    turn.value = "board__field--cross";
    currentPlayer = "circle";
    changingPlayer.src = "circle.svg";
    event.target.disabled = true;

    return "_";
  }
};

//vybrání všech políček

const btns = document.querySelectorAll("button");
const vstup = document.querySelector(".field");
btns.forEach((button) => {
  button.addEventListener("click", playing, () => {
    vstup.value += button.textContent;
    const winner = findWinner(findIt);
    console.log(winner);
    if (winner === "o" || winner === "x") {
      setTimeout(() => {
        alert(`Vyhrál hráč se symbolem ${winner}`);
        location.reload();
      }, 150);
    } else if (winner === "tie") {
      setTimeout(() => {
        alert("Tahle hra je nerozhodně!");
        location.reload();
      }, 150);
    }
  });

  const playingfield = Array.from(btns);

  const findIt = playingfield.map((button) => {
    if (button.classList.contains("board__field--circle")) {
      return "o";
    } else if (button.classList.contains("board__field--cross")) {
      return "x";
    } else {
    }
  });
});

//přidání confirm
const again = document.querySelector(".restartbutton");
again.addEventListener("click", (event) => {
  if (!confirm("Opravdu chceš začít znovu ?")) {
    event.preventDefault();
  }
});

/*
const vitez = findWinner(herniPole);
if (vitez === "o" || vitez === "x") {
  alert(`Vyhrál hráč se symbolem ${vitez}.`); // Vyhrál hráč se symbolem o.
}*/
