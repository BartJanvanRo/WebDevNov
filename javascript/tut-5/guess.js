var randomNumbers = [5, 6, 10, 55, 33, 88, 99]
var userGuess = 512

var guess = randomNumbers.some(function (inputNumber) {
    return inputNumber === userGuess //true statement
})

guess ? console.log('you won') : console.log('try again')
// eerste true statement, tweede false



var students = [{
    name: "Jack",
    course: "Python",
    score: 45
},
{
    name: "On",
    course: "Css",
    score: 75
},
{
    name: "Put",
    course: "Javascript",
    score: 80
}];

function findWhoPassedExam(param) {
    let Result = param.filter(function (value) {
        return value.score >= 50
    })
    return Result
}

/* console.log(findWhoPassedExam(students))
 */


var mynumbers = [3, 4, 5, 6, 7, 8]

result=""

function ifNumberExcists(number) {
    let result = mynumbers.includes(number)

    if (result) {
        console.log("this number is in array")
    } else {
        console.log("no number")
    }
}


ifNumberExcists(3)

result = mynumbers.reverse()


console.log(result);
