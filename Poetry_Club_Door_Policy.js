//1. Get the first letter of a sentence

function frontDoorResponse(sentence){
    return sentence[0]
}
console.log(frontDoorResponse('Stands so high'))

//2. Capitalize a word

function frontDoorPassword(sentence){
    return sentence[0].toUpperCase() + sentence.slice(1).toLowerCase()
}
console.log(frontDoorPassword('SHIRE'))

//3. Get the last letter of a sentence

function backDoorResponse(sentence){
    var noWhitespace = sentence.split(" ").join('')
    return noWhitespace.slice(-1)
}

console.log(backDoorResponse('Stands so high      '))

//4. Be polite

function backDoorPassword(sentence){
   return frontDoorPassword(sentence) + ", please"
}

console.log(backDoorPassword("horse"))