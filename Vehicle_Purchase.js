//Choose between two potential vehicles to buy

function chooseVehicle(opt1, opt2){
    if (opt1 < opt2){
        return `${opt1} is clearly the better choice`
    }else if(opt2 < opt1){
        return `${opt2} is clearly the better choice`
    }else {
        return "Same option"
    }
}
console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'))

