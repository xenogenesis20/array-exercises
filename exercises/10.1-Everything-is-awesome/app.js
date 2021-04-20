let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item,index) => {
            // magic goes inside these brackets
            if (item == 1){
                return_array.push(item)
            } else if (item == 0){
                let word = "Yahoo";
                return_array.push(word);
            }
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));