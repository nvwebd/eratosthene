const eratosthene = require('../../source/eratosthene');
const css = require('../less/styles.less');

(function(){

  //Saving DOM input elements
  const inputForm = document.getElementById('input-form');
  const maxLimit = document.getElementById('max-limit');
  const fromFilter = document.getElementById('from-filter');
  const toFilter = document.getElementById('to-filter');
  const specNumber = document.getElementById('spec-number');
  const resultsDiv = document.getElementById('results-div');

  //Clean results before repainting
  const resultCleaner = () => {
    if(resultsDiv.hasChildNodes()){
      while(resultsDiv.hasChildNodes()){
        resultsDiv.removeChild(resultsDiv.lastChild);
      }
    }
  }

  /**
   * [primeNumbers On SUBMIT return the found Prime Numbers]
   * @type {[eventListener]}
   */
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    resultCleaner();

    let primeNumbers;

    primeNumbers = eratosthene([maxLimit.value, fromFilter.value, toFilter.value, specNumber.value]);

    const primesFoundH3 = document.createElement('h3');
          primesFoundH3.innerHTML = `I've found ${primeNumbers.length} Prime Numbers...`;

    resultsDiv.appendChild(primesFoundH3);

    let resultsUl = document.createElement('ul');

    let i = 0;
    let arrayLength = primeNumbers.length;
    for (; i < arrayLength; i++) {
      const resultsLi = document.createElement('li');
            resultsLi.innerHTML = `${primeNumbers[i]}`;
      resultsUl.appendChild(resultsLi);
    }

    resultsDiv.appendChild(resultsUl);

  });

})();
