const numberInput = document.getElementById("numInput");
const elementsNumber = document.getElementById("with");
const exclude = document.getElementById("excluding");
const include = document.getElementById("including");
const calcButton = document.getElementById("calculate");
const result = document.getElementById("result");

function combination(number, times) {
	const array = [];
  const newArray = [];
  let counter = 1;
	for (let i = 0; i < times; i++) { 		
    array.push(counter);
		counter++;
	}
  let sum;
  let indexCounter = array.length;
	for (let i = 1; i <= 9; i++) {
    array[0] = i;
		for (let j = i + 1; j <= 9; j++) {
			if (array.length < 2) {
				break;
      } else {
        array[1] = j
        for(let k = j + 1; k <= 9; k++) {
          if (indexCounter < 3) {
            break
          } else {
            array[2] = k
            for(let l = k + 1; l <= 9; l++) {
              if (indexCounter < 4) {
                break
              } else {
                array[3] = l
                for(let m = l + 1; m <= 9; m++) {
                  if(indexCounter < 5) {
                    break
                  } else {
                    array[4] = m;
                    for(let n = m + 1; n <= 9; n++) {
                      if (indexCounter < 6) {
                        break
                      } else {
                        array[5] = n;
                        for(let o = n + 1; o <= 9; o++) {
                          if (indexCounter < 7) {
                            break
                          } else {
                            array[6] = o;
                            for(let p = o + 1; p <= 9; p++) {
                              if(indexCounter < 8) {
                                break
                              } else {
                                array[7] = p;
                                for(let q = p + 1; q <= 9; q++) {
                                  if(indexCounter < 9) {
                                    break;
                                  } else {
                                    array[8] = q;
                                    sum = array.reduce((acc, curr) => acc + curr, 0);
                                    if (sum === number) {
                                      newArray.push([...array]); 
                                    }
                                  }
                                }
                                if(indexCounter < 9) {
                                  sum = array.reduce((acc, curr) => acc + curr, 0);
                                  if (sum === number) {
                                    newArray.push([...array]); 
                                  }
                                }
                              }
                            }                          
                            if (indexCounter < 8) {
                              sum = array.reduce((acc, curr) => acc + curr, 0);
                              if (sum === number) {                
                                newArray.push([...array]); 
                              }
                            }
                          }
                        }                     
                        if(indexCounter < 7) {
                          sum = array.reduce((acc, curr) => acc + curr, 0);
                          if (sum === number) {
                            newArray.push([...array]); 
                          }
                        }                          
                      }
                    }
                    if(indexCounter < 6) {
                      sum = array.reduce((acc, curr) => acc + curr, 0);
                      if (sum === number) {
                        newArray.push([...array]); 
                      }
                    }
                  }
                }
                if (indexCounter < 5) {
                  sum = array.reduce((acc, curr) => acc + curr, 0);
                  if (sum === number) {
                    newArray.push([...array]); 
                  }
                }     
              }
            }
            if (indexCounter < 4) {
              sum = array.reduce((acc, curr) => acc + curr, 0);
              if (sum === number) {
                newArray.push([...array]); 
              }
            }
          }     
        }
        if (indexCounter < 3) {
          sum = array.reduce((acc, curr) => acc + curr, 0);
          if (sum === number) {
            newArray.push([...array]); 
          }
        }     
      }
    }   
    if (indexCounter < 2) {
      sum = array.reduce((acc, curr) => acc + curr, 0);
      if (sum === number) {
        newArray.push([...array]); 
      }
    }
  }
  if(newArray.length > 0) {
    return newArray
  } else {
    if(!numberInput.value || !elementsNumber.value) {
      result.innerHTML = `<p id="errorMessage">Please enter a number and the number of elements to add</p>`;
    } else {
      result.innerHTML = `<p id="errorMessage">Impossible combination</p>`
    }
  throw new Error("Invalid input")
  }
}

function excludes(array, numbers) { 
  let filteredArray = array;
  for(let number of numbers) {
    filteredArray = filteredArray.filter(item => {
      for (let el of item) {
        if(el === number) {
          return false;
        }
      }
    return true;
  })};
  return filteredArray
}

function includes(array, numbers) {
  let filteredArray = array;
  for(let number of numbers)
    filteredArray = filteredArray.filter(item => {
      for (let el of item) {
        if(el === number) {
          return true;
        }
      }
    return false;
  });
  return filteredArray;
}

function execution(number, times, exclusion = [], inclusion = []) {
  const baseArray = combination(number, times);
  arrayExclude = excludes(baseArray, exclusion);
  definiteArray = includes(arrayExclude, inclusion);
  return definiteArray;
}
function eventHandler() {
  result.innerHTML = "";
  const num = parseInt(numberInput.value);
  const numOfElements = parseInt(elementsNumber.value);
  const exclArray = exclude.value.split("").filter(el => !isNaN(el) && el !== " ").map(el => parseInt(el));
  const inclArray = include.value.split("").filter(el => !isNaN(el) && el !== " ").map(el => parseInt(el));
  const definiteArray = execution(num, numOfElements, exclArray, inclArray)
  definiteArray.forEach(el => {
    result.innerHTML += `<span>${el.join(", ")}</span><br>`;
  }); 
}

calcButton.addEventListener("click", eventHandler);
