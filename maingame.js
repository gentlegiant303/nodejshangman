let Word = require('./word.js');
let prompt = require('prompt');

console.log("Welcome to Beauty and the Beast hangman!");
console.log("-----------------------------");
prompt.start();



game = {
  words: ["rose", "beast", "disney", "france", "books", "belle"],
  gamesWon: 0,
  guessesRemaining: 10,
  currentWord: null,

  startGame: function(word) {
    this.resetGuesses();
    this.currentWord = new Word(this.words[Math.floor(Math.random() * this.words.length)]);
    this.currentWord.getLet();
    this.promptUser();
  },

  resetGuesses: function() {
    this.guessesRemaining = 10;
  },

  promptUser: function() {
    let self = this;
    prompt.get(['guessLetter'], function(err, result) {
      console.log("You guessed: " + result.guessLetter);
      let manyGuessed = self.currentWord.checkLetter(result.guessLetter);

      if (manyGuessed == 0) {
        console.log("Incorrect, try again");
        self.guessesRemaining--;

      } else {
        console.log("CORRECT");
        if (self.currentWord.findWord()) {
          console.log(self.currentWord.target)
          console.log("Winner Winner Chicken Dinner");
          console.log("-------------------");
          return;
        }
      }

      console.log("Guesses remaining: " + self.guessesRemaining);
      console.log("-------------------");
      if ((self.guessesRemaining > 0) && (self.currentWord.found == false)) {
        self.promptUser();
      } else if (self.guessesRemaining == 0) {
        console.log("Game over. Correct Word ", self.currentWord.target);
      } else {
        console.log(self.currentWord.wordRender());
      }
    });

  }


};

game.startGame();