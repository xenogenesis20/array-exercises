var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    let newArray= [];
	for(var name of people){
        if (name !== personName ){
            newArray.push(name)
        } 
    } 
    return newArray;
} 
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));