const randUtil = {
  randInt: function(min = 0, max = 360) {
    if (isNaN(min) || isNaN(max) {
      return false;
    }
    return Math.floor(Math.random() * (max - min) + min);
  },

  randHue: function() {
    return this.randInt();
  }
}