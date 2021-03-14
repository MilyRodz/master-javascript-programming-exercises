// Write your function here

const getElementsGreaterThan10AtProperty = (objectNumbers, key) => {
    let listGreaterThan10 = [];
    let numbersList = objectNumbers[key];
  
    if(numbersList){
      // agregar al listGreaterThan10 los números que sean mayores a 10
      for (let i = 0; i < numbersList.length; i++) {
          if(numbersList[i] > 10){
              listGreaterThan10.push(numbersList[i]); 
          }
      }
    } 
    return listGreaterThan10;
  };
  
let objectNumbers = {
    numbers: [30, 30, 30],
};

let output = getElementsGreaterThan10AtProperty(objectNumbers, "numbers");
console.log(output);
