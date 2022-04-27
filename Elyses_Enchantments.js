//Remove a card from the stack

function removeItem(listOfItems, position){
    return listOfItems.splice(position,1)
}

const list = [1,2,3,4,5]
console.log(removeItem(list, 0))