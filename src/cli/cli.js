const readline = require('readline');
const eratosthene = require('../source/eratosthene');
const winston = require('winston');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Welcome to PrimeSearcher - want to find some Prime numbers with me? (Y/n) \n'
});

let inputCounter = 0;
let primeArray = [];

rl.prompt();

rl.on('line', (line) => {
  let inputLine = line.trim();

  if(inputLine === 'quit'){
    rl.close();
  }

  switch(inputCounter){
    case 0:
      inputLine = (inputLine.length !== 0) ?  inputLine : 'y';
      if(inputLine === 'y'){
        winston.log(`Well let's have some fun then :) \n`);
        rl.setPrompt(`What is the maximum Prime number limit (if left empty 40 will be set as the default)? \n`);
        rl.prompt();
      } else {
        console.log(`Well until nex time then.`);
        rl.close();
      }
      inputCounter++;
      break;
    case 1:
      inputLine = (inputLine.length !== 0) ?  inputLine : 40;
      primeArray.push(inputLine);
      rl.setPrompt(`Do you want to filter the Primes "from-to": 10-40 for example (leave empty to skip)? \n`);
      rl.prompt();
      inputCounter++;
      break;
    case 2:
      if(inputLine.length === 0){
        primeArray.push(undefined);
        primeArray.push(undefined);
      } else {
        const tempArray = inputLine.split('-');
        primeArray.push(tempArray[0]);
        primeArray.push(tempArray[1]);
      }

      rl.setPrompt(`Which number should the Prime have in them?(example: 3 will show all Primes which have 3 included - leave empty to skip) \n`);
      rl.prompt();
      inputCounter++;
      break;
    case 3:
      primeArray.push(inputLine);
      console.log(`Let's see those Primes then...`);
      console.log(eratosthene(primeArray));
      process.exit(0);
      // eratosthene(primeArray);
      break;
    default:
      break;
  }
}).on('close', () => {
  winston.log('Alrighty then... Have a nice day!');
  process.exit(0);
})
