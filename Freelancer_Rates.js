//1. Calculate the day rate given an hourly rate

function dayRate(hourlyRate){
    return hourlyRate*8
}
console.log(`Day rate = $${dayRate(89)}`)

//2. Calculate the number of workdays given a fixed budget

function daysInBudget(fixedBudget, hourlyRate){
    const day_rate = dayRate(hourlyRate)
    return Math.floor(fixedBudget/day_rate)
}
console.log(`Days in budget = ${daysInBudget(20000,89)} days`)

//3. Calculate the discounted rate for large projects

function priceWithMonthlyDiscount(hourlyRate, daysInBudget, discountRate){
    const billableDays = 22
    const remainingDays = daysInBudget%billableDays
    const fullMonthy = (daysInBudget-remainingDays)/billableDays
    var priceFullMonthy = Math.ceil(dayRate(hourlyRate)*(fullMonthy*billableDays)*(1 - discountRate))
    var priceDaysRemaining = Math.ceil(remainingDays*dayRate(hourlyRate))
    return (`Price for large project with ${daysInBudget} days of work: $${priceFullMonthy + priceDaysRemaining}`)

    
}

console.log(priceWithMonthlyDiscount(89,230,0.42))