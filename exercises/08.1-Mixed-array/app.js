var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
console.log(typeof(mix[1]))

var newArray = [];

for (let element of mix){
   newArray.push(typeof(element))
}
console.log(newArray)