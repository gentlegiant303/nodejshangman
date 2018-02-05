let letter = function(let) {
  this.charac =
    let;
  this.appear = false;
  this.letterRender = function() {
    //this should render the letters left, but isn't working
    return !(this.appear) ? "_" : this.charac;
  };
};

module.exports = letter;