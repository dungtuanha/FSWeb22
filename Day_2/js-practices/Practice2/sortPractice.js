'use strict'

function sort(input) {
  for(var i = 0; i < input.length; i++){
    min = input[i];
    if(i + 1 < input.length){
      for(var j = i + 1; j < input.length; j++){
        if(input[j] < min){
          var min = input[j];
          var temp = input[j];
          input[j] = input[i];
          input[i] = temp;
        }
      }
    }
  }
  return input;
}

module.exports = sort
