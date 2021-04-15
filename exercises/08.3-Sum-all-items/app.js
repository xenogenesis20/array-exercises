function sumTheElements(theArray){
	
	var total = 0;
	
	//your code here
    for (let index = 0; index < theArray.length; index++){
        
        total = total + theArray[index];
        
    }
	return total;
}
sumTheElements([2,13,34,5]);
