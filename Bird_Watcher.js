//1. Determine the total number of birds that you counted so far



function totalBirdCount(bird){
    let total = 0;
    for (var i of bird){
        total += i
    }
    return total
}

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

console.log(totalBirdCount(birdsPerDay))