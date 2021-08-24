const datalayer = require('./datalayer');
const _ = require('lodash');

function loop() {
    const a = performance.now();
    const start = 2;
    const limit = 10000;
    //const limit = Number.MAX_SAFE_INTEGER;
    for(let i = start; i < limit; i++) {
        let x = i;
        let dto = datalayer.createDataObject(x, x, 1, isEven(x));
        console.log(`Start: ${start}. Limit: ${limit}. Seed Number: ${i}.`);
        while (x !== 1) {
            if (x > dto.maxAttained) dto.maxAttained = x;
            dto.numOfSteps++;
            if (isEven(x)) {
                x = x/2;                
            } else {
                x = x * 3 + 1;
            }
        }
        datalayer.addEntry(dto);
    }
    const b = performance.now();
    console.log(`Execution took ${millisecondsToHuman(b-a)}`);
}

function millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms  / 1000 / 3600 ) % 24)
  
    const humanized = [
      _.padStart(hours.toString(), 2, 0),
      _.padStart(minutes.toString(), 2, 0),
      _.padStart(seconds.toString(), 2, 0),
    ].join(':');
  
    return humanized;
  }

const isEven = n => {
    return n%2 === 0;
};

loop();