// booleans 
const knightIsAwake = false
const archerIsAwake = false
const prisonerIsAwake = true
const petDogIsPresent = false

//1. Check if the 'Fast Attack' action is possible

function canExecuteFastAttack(knightAwake){
    if (knightAwake){
        return true
    }else{
        return false
    }
}
console.log(canExecuteFastAttack(knightIsAwake))

//2. Check if the 'Spy' action is possible

function canSpy(knightAwake, archerAwake, prisonerAwake){
    if (knightAwake || archerAwake || prisonerAwake){
        return true
    }else{
        return false
    }
}
console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake))

//3. Check if the 'Signal Prisoner' action is possible

function canSignalPrisoner(archerAwake, prisonerAwake){
    if (prisonerAwake && archerAwake == false){
        return true
    }else {
        return false
    }
}
console.log(canSignalPrisoner(archerIsAwake,prisonerIsAwake))

//4. Check if the 'Free Prisoner' action is possible

function canFreePrisoner(knightAwake, archerAwake, prisonerAwake, petDogPresent){
    if ((petDogIsPresent && archerAwake == false) || (knightAwake == false && archerAwake == false && prisonerAwake)) {
        return true
    } else {
        return false
    }
}
console.log(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent))
