import timeToMixJuice from "./Mixed_Juices.js"


//3. Finish up the shift
function remainingOrders(remainingMinutes, juices){
    while(remainingMinutes > 0 && juices.length > 0){
        remainingMinutes -= timeToMixJuice(juices.shift())
    } return juices
}
console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))