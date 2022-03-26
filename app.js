//Game Values
let min = 1,
  max = 10,
  winningNum = '',
  guessesLeft = 3

//UI Elements
const gameWrapper = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message')

//Asing UI min and max
minNum.textContent = min
maxNum.textContent = max

//Play again event listener
gameWrapper.addEventListener('mousedown', (e) => {
  if (e.target.className === 'play-again') {
    guessInput.value = ''
    window.location.reload()
  }
})

//Listen for guess

guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value)
  console.log(guess)
  //Validate
  if (guess < min || guess > max || isNaN(guess)) {
    setMessage(
      `POR FAVOR INTRODUCE UN NUMERO ENTRE ${min} Y ${max}. TE ${
        guessesLeft === 1 ? 'QUEDA' : 'QUEDAN'
      }  ${guessesLeft} ${guessesLeft === 1 ? 'INTENTO' : 'INTENTOS'}`,
      'red'
    )
    guessInput.value = ''
    return
  }

  if (guess === winningNum) {
    guessInput.disabled = true
    guessInput.classList.add('isdisabled')
    guessInput.style.borderColor = 'green'
    guessInput.value = ''
    guessBtn.value = 'Juagar de nuevo'
    guessBtn.className += 'play-again'
    setMessage(
      `😎😎😎HAS GANADO! ${winningNum} ES EL NUMERO CORRECTO!`,
      'green'
    )
  } else {
    guessesLeft -= 1
    if (guessesLeft === 0) {
      guessInput.disabled = true
      guessInput.classList.add('isdisabled')
      guessInput.style.borderColor = 'red'
      guessInput.value = ''
      guessBtn.value = 'Juagar de nuevo'
      guessBtn.className += 'play-again'
      setMessage(
        `😭😭😭GAME OVER! HAS PERDIDO. EL NUMERO GANADOR ERA ${winningNum}`,
        'red'
      )
    } else {
      guessInput.style.borderColor = 'rebeccapurple'
      guessInput.value = ''
      setMessage(
        `${guess} NO ES CORRECTO, TE ${
          guessesLeft === 1 ? 'QUEDA' : 'QUEDAN'
        }  ${guessesLeft} ${guessesLeft === 1 ? 'INTENTO' : 'INTENTOS'} `,
        'rebeccapurple'
      )
    }
  }
})

//Set message
function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}

//Get Winning number
function getRandomNum(min, max) {
  winningNum = Math.floor(Math.random() * (max - min + 1) + min)
}

getRandomNum(min, max)
