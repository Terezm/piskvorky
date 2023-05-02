import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";

let currentPlayer = "circle";

const changingPlayer = document.querySelector("img");
if (currentPlayer === "circle") {
  changingPlayer.src = "circle.svg";
}
const btns = document.querySelectorAll("button");
//nastavení hráče
const playing = (event) => {
  const turn = event.target.classList;

  if (currentPlayer === "circle") {
    turn.value = "board__field--circle";
    currentPlayer = "cross";
    event.target.disabled = true;
    changingPlayer.src = "cross.svg";
    return answer;
  } else {
    currentPlayer === "cross";
    turn.value = "board__field--cross";
    currentPlayer = "circle";
    changingPlayer.src = "circle.svg";
    event.target.disabled = true;
  }

  const playingField = Array.from(btns);
  const findIt = playingField.map((button) => {
    if (button.classList.contains("board__field--circle")) {
      return "o";
    } else if (button.classList.contains("board__field--cross")) {
      return "x";
    } else {
      return "_";
    }
  });

  const winner = findWinner(findIt);
  console.log(winner);
  if (winner === "o" || winner === "x") {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${winner} !`);
      location.reload();
    }, 150);
  } else if (winner === "tie") {
    setTimeout(() => {
      alert("Tahle hra je nerozhodně!");
      location.reload();
    }, 150);
  }
};
//vybrání všech políček

//přidání fetch
const answer = () => {
  currentPlayer = "cross";
  btns.forEach((button) => {
    button.disabled = true;
  });

  fetch("https://piskvorky.czechitas-podklady.cz/api/suggest-next-move", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      board: findIt(),
      player: "x",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const { x, y } = data.position;
      const index = x + y * 10;
      btns.forEach((button) => {
        if (
          button.classList.contains("board__field--cross") ||
          button.classList.contains("board__field--circle")
        ) {
          button.disabled = true;
        } else {
          button.disabled = false;
        }
      });

      btns[index].click();
    });
};

const field = document.querySelector(".field");
btns.forEach((button) => {
  button.addEventListener("click", playing);
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
