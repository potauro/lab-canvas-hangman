class Hangman {
  constructor(words, secretWord, letters, guessedLetters, errorsLeft) {
    this.words = words;
    this.secretWord =  this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 8;

    // ... your code goes here
  }

  pickWord() {
    // ... your code goes here
    let randomWord = Math.floor(Math.random()*this.words.length);
    return this.words[randomWord];
  }

  checkIfLetter(keyCode) {
    let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    if (alpha.includes(this.letters)){
      return true
    } else {
      return false
    }
      
    // ... your code goes here
  }

  checkClickedLetters(letter) {
   
    
  }

  addCorrectLetter(letter) {
    // ... your code goes here
  }

  addWrongLetter(letter) {
    // ... your code goes here
  }

  checkGameOver() {
    // ... your code goes here
  }

  checkWinner() {
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
