'use strict';

module.exports = (n) => {

  //Force maxLimit to 40
  n[0] = n[0] !== '' ? n[0] : 40;

  let array = [],
      maxLimitInt = n[0],
      maxLimit = Math.sqrt(n[0]),
      fromInt = n[1],
      toInt = n[2],
      toLimit = Math.sqrt(n[2]),
      specNumber = n[3],
      output = [];

  if(fromInt && toInt){
    for (let i = fromInt; i <= toInt; i++) {
      array.push(i);
    }

    for(let i = 0; i < array.length; i++){
      let moduloCounter = 0;
      for(let j = 1; j <= array[i]; j++){
        if(array[i] % j === 0){
          moduloCounter++;
        }
      }
      if(moduloCounter <= 2){
        output.push(array[i]);
      }
    }
  } else {
    for (let i = 0; i < maxLimitInt; i++) {
      array.push(true);
    }
    for (let i = 2; i <= maxLimit; i++) {
      if (array[i]) {
        for (let j = i * i; j < n[0]; j += i) {
            array[j] = false;
        }
      }
    }
    for (var i = 1; i < n[0]; i++) {
      if(array[i]) {
          output.push(i);
      }
    }
  }

  if(specNumber !== undefined){
    let selectiveArray = [];
    for(let i = 0; i < output.length; i++){
      if (output[i].toString().includes(specNumber.toString())){
        selectiveArray.push(output[i]);
      }
    }
    return selectiveArray;
  }

  return output;
};
