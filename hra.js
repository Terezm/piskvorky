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
  }
};

//vybrání všech políček
const vstup = document.querySelector(".field");
const btns = document.querySelectorAll("button");

btns.forEach((button) => {
  button.addEventListener("click", playing, () => {
    vstup.value += button.textContent;
  });
});

//přidání confirm
const again = document.querySelector(".restartbutton");
again.addEventListener("click", (event) => {
  if (!confirm("Opravdu chceš začít znovu ?")) {
    event.preventDefault();
  }
});
