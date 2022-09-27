// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");

    if (!error) {
      functionToRunWhenThingsAreDone(data);
    }

    return console.log('error', error);
  });

};

const printOutCatBreed = breed => {
  return console.log('Return Value: ', breed);
}

breedDetailsFromFile('Bombay', printOutCatBreed);