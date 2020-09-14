const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
const over18 = peopleArray.filter(person => person.age >= 18)
const alphabetically = over18.sort((a,b) => a.lastName > b.lastName)
const printedLikeLI = alphabetically.map(function(person){
    return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "." + "</li>"
})
console.log(printedLikeLI)
