const myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

let value = 0; 

const maxInterger = (array) => {
    for (let i = 0; i < array.length; i++ ){
        if (array[i] > value) {
            value = array[i]
        }
    }
    return value;
}

console.log(maxInterger(myArray))