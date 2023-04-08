let currentPlayer = 'circle';


const btn1 = document.querySelector('button:nth-child(1)');
const btn2 = document.querySelector('button:nth-child(2)');
const btn3 = document.querySelector('button:nth-child(3)');
const btn4 = document.querySelector('button:nth-child(4)');
const btn5 = document.querySelector('button:nth-child(5)');
const btn6 = document.querySelector('button:nth-child(6)');
const btn7 = document.querySelector('button:nth-child(7)');
const btn8 = document.querySelector('button:nth-child(8)');
const btn9 = document.querySelector('button:nth-child(9)');
const btn10 = document.querySelector('button:nth-child(10)');


const changingPlayer = document.querySelector('img')

if (currentPlayer === 'circle') {
changingPlayer.src = 'circle.svg'
} 



const playing = (event) => {
  const turn = event.target.classList
    
   if (currentPlayer === 'circle') {
    turn.value = 'board__field--circle';
    currentPlayer = 'cross';
   event.target.disabled = true
   changingPlayer.src = 'cross.svg';
    }
    else {
    currentPlayer === 'cross';
    turn.value = 'board__field--cross';
    currentPlayer = 'circle';
    changingPlayer.src = 'circle.svg';
    event.target.disabled = true
  }};


btn1.addEventListener('click', playing,);
btn2.addEventListener('click', playing);
btn3.addEventListener('click', playing);
btn4.addEventListener('click', playing);
btn5.addEventListener('click', playing);
btn6.addEventListener('click', playing);
btn7.addEventListener('click', playing);
btn8.addEventListener('click', playing);
btn9.addEventListener('click', playing);
btn10.addEventListener('click', playing);


const again = document.querySelector('.restartbutton')

again.addEventListener('click', (event) => {
    if (!confirm('Opravdu chceš začít znovu ?')) {
        event.preventDefault()}})