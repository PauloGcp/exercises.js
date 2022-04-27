//1. Determine how long it takes to mix a juice

export default function timeToMixJuice(juice){
    switch (juice){
        case "Pure Strawberry Joy": return 0.5
        case "Energizer" : return 1.5
        case "Green Garden": return 1.5
        case "Tropical Island": return 3
        case "All or Nothing": return 5
        default: return 2.5
    }
}

console.log(timeToMixJuice('Berries & Lime'))



