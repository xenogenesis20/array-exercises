let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for (i = 0; i <par.length; i++){
    let letter = par[i];
    if (letter != " "){

        if(letter in counts ){
            counts[letter] +=1;
            
        } else {
            counts[letter]=1;
        }
    }

}

console.log(counts);