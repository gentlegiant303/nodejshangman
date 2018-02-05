let letter = require('./letter.js');

function Word(target) {
  this.target = target;
  this.lets = [];
  this.found = false;

  this.getLet = function() {
    for (let i = 0; i < this.target.length; i++) {
      this.lets.push(new letter(this.target[i]));
    }
  };

  this.findWord = function() {
    this.found = this.lets.every(function(currLett) {
      return currLett.appear;
    });
    return this.found;
  };

  this.checkLetter = function(guessLet) {
    let toReturn = 0;

    for (let i = 0; i < this.lets.length; i++) {
      if (this.lets[i].charac == guessLet) {
        this.lets[i].appear = true;
        toReturn++;
      }
    }
    return toReturn;
  };

  this.wordRender = function() {
    let string = '';
    for (let i = 0; i < this.lets.length; i++) {
      string += this.lets[i].letterRender();
    }
    return string;
  };

}

module.exports = Word;