const getParkingLotState = (array) =>{
    let output = {
        totalSlots : 0,
        availableSlots : 0,
        occupiedSlots : 0,
    }
        for (let i = 0; i < array.length; i++){
            for (let j = 0; j < array[i].length; j++){
                if (array[i][j] == 1) {
                    output.occupiedSlots += 1
                    output.totalSlots +=1
                } 
                if (array[i][j] == 2) {
                    output.availableSlots += 1
                    output.totalSlots +=1
                }
            }
        }
        return output;
}

let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
console.log(getParkingLotState(parking_state))