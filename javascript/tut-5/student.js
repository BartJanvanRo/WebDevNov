/* filter data, over 5
dan print die gegevens via html */


//de data
var students = [
    {
        name: "Student 1",
        score: 10
    },

    {
        name: "Student 2",
        score: 8
    },

    {
        name: "Student 3",
        score: 5
    },

    {
        name: "Student 4",
        score: 3
    }
]

//filter boven de 5
function findWhoPassedExam(param){
    let Result = param.filter(function(value) {
        return value.score > 5
    })
    return Result
}


var ulList = document.getElementById('namelist')
//koppelt  de data in de html met de functie onderstaande

//maakt de li visueel (visualize maakt de naam duidelijk.)
findWhoPassedExam(students).forEach(function(visualize){
    console.log(visualize) //om in de log te zien, kan weg
    ulList.innerHTML += `<li>${visualize.name} heeft de score ${visualize.score}</li>`
})
