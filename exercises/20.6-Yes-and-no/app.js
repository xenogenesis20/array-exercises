let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let newArray = theBools.map(number => number == 0 ? 'woko':'wiki');
console.log(newArray);
