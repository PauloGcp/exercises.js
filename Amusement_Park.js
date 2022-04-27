//1. Create a new visitor
function createVisitor(name, age, id) {
    return { name, age, id }
}

a = createVisitor('Verena Nardi', 45, 'H32AZ123')
console.log(a)

//2. Revoke the ticket

function revokeTicket(people){
    people.ticketId = null
    return people
}

const visitor = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
}
console.log(revokeTicket(visitor))

