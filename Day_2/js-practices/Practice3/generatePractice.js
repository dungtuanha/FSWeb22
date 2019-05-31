'use strict'

function generate(testLengthArray){
  const result = [];
  let i = 0
  while(i < testLengthArray.length){
    const Items = {
      input : [],
      target : null,
      output : null
    };
    
    for(let j = 0; j < testLengthArray[i]; j++){
      Items.input.push(Math.floor(Math.random() * 20001 - 10000));
    }
    
    Items.input.sort((a,b) => a - b);

    if(i == 0){
      Items.target = 100001;
      Items.output = -1;
    } else if (i == 1){
      Items.target = Items.input[0];
      Items.output = 0
    } else if (i == 2){
      Items.target = Items.input[Items.input.length - 1];
      Items.output = Items.input.length - 1;
    } else {
      Items.target = Math.floor(Math.random() * 20001 - 10000);
      Items.output = Items.input.indexOf(Items.target);
    }

    result.push(Items);
    i += 1;
  }
  return result;
}

module.exports = generate
