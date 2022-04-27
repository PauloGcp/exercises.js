//1. Define the expected oven time in minutes
const EXPECTED_MINUTES_IN_OVEN = 40

//2. Calculate the remaining oven time in minutes

function remainingMinutesInOven(minutesOven){
    return (`Remaining ${EXPECTED_MINUTES_IN_OVEN - minutesOven} minutes`)
}
console.log(remainingMinutesInOven(30))

//3. Calculate the preparation time in minutes

function preparationTimeInMinutes(nmbLayers){
    return nmbLayers*2
} 
console.log(`Preparation time: ${preparationTimeInMinutes(2)} minutes`)

//4. Calculate the total working time in minutes

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven){
    return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}
console.log(`Total minutes: ${totalTimeInMinutes(3, 20)}`)