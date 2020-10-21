export const randUtil = {

  randInt:        function(min = 0, max = 100) {
                    if (isNaN(min) || isNaN(max)) {
                      return false;
                    }
                    return Math.floor(Math.random() * (max - min) + min);
                  },

  randHue:        function() {
                    return this.randInt(0, 360);
                  },

  randArrayItem:  function(array) {
                    if (!Array.isArray(array) || array.length < 1) {
                      return false;
                    }

                    const randIndex = this.randInt(0,array.length);
                    return array[randIndex];
                  }
}