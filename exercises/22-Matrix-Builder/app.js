// Code goes here

const matrixBuilder = (int) =>{
    let array = [];
        for (let i = 0; i <int; i++){
          array.push([])
          for(let j =0; j < int; j++){
              array[i].push(1);
          }
        }
         return array;
}

// do not change anything from this line down
console.log(matrixBuilder(5))
