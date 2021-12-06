
/* function */

function funcName() {

}

/* parameter kan alle namen hebbem */
function funcName1(para1, para2, para3) {
    console.log(para1, para2, para3)
}
/* wordt niet uitgevoerd, moet naog aangeroepen worden.  */

/* funcName1("string",44,[1,2,3])
 */
function sumOfNumbers() {
    var a = 5
    var b = 2
    return a
}

/* console.log(sumOfNumbers())
 */


/* function sumOfNumbers(){
    console.log("before return keyword")
    return 5 + 5
    /* alles moet voor return gebeuren. 
} */





/* var a1=10
var a2=20

function sumOfNumbers(){
    
    return a1 + a2
    /* alles moet voor return gebeuren.
}


console.log(sumOfNumbers())  */


/* function sumOfNumbers(p1,p2){
return p1+p2
}


console.log(sumOfNumbers(50,40))  */

/* zelfde als var p1 = 50 etc */



function sayMyName(username) {
    return `Hello your name is ${username}`
    /* template literal */
}


/* console.log(sayMyName('root'))
 */

var myStudents = ["Jack", "Bob", "George"]

function getStudentName(getData) {
    console.log(getData[0])
    getData[0] = "Japie"
    console.log(getData[0])
}
/* 
getStudentName(myStudents)
console.log(myStudents) */


/* geneste functie */

function Layer1(number1) {
    console.log("This is from Layer1 function", number1)

    function Layer2() {
        console.log(number1 + 1, "layer 2 Function.")
    }
    Layer2()
}
/* 
Layer1(5)  (hier komt de verwerkbare data, bijv. input form) */

var myName = "Kern"

function Keeper1(param) {
    return param
}

function Keeper2(param) {
    return `your name is ${param}`
}

function printService(param) {
    console.log(param)
}

/* printService(Keeper2(Keeper1(myName)))
 */

var myStudents = []

/* function addStudent(name){
    return myStudents.push(name)
    (push om iets toe te voegen.)
} 

addStudent("Stinky")
addStudent("Wicky")
addStudent("Romeo")
*/

/* console.log(myStudents)
 */

function addStudent(student) {
    return myStudents.push(student)
}


const Student_1 = {
    name: "Bart",
    age: 28
}

const Student_2 = {
    name: "Tina",
    age: 12
}

addStudent(Student_1)
addStudent(Student_2)


/* console.log(myStudents)
 */
/* brutoSal */

var tax = 25

function brutoNetto(brutoSalary, tax) {
    var taxamount = brutoSalary * tax / 100
    return brutoSalary - taxamount

}

const brutoSalary_1 = {
    Bruto: 2000,
    Tax: 25
}

const brutoSalary_2 = {
    Bruto: 5000
}


/* console.log("met const "+ brutoNetto(brutoSalary_1.Bruto, brutoSalary_1.Tax))
console.log("direct vanuit de function "+ brutoNetto(3000, 25)) */


/* ------------------------ */


var Message = document.getElementById('Message')
var getUserName = document.getElementById('Username')



function SayMyName() {
    console.log(getUserName.value)
    Message.innerHTML = `Your username is ${getUserName.value}`

}
/* deel 2 */

var number1 = document.getElementById("num1")
var number2 = document.getElementById("num2")
var button = document.getElementById("btn")
var result = document.getElementById("result")

function DoCal() {
    console.log("hello test test")
    var sumResult = Number(number1.value) + Number(number2.value);
    /*     console.log(sumResult)
     */
    result.innerHTML = `Result is ${sumResult}`
}



/* locale variables and Globale variables */


/* local */

function getNumber() {
    var companyName = "intec brussel"
}

/* console.log(companyName)
niet leesbaar omdat het in de locatie van functie bevindt. 
*/


/* globale variable */


var companyName = "Intec Brussel"
/* buiten function */

/* function getNumbed(){
    var company = "Intec"
    console.log(companyName,"intec")
    console.log(company,"intec")
}
 */



const auto = {
    a: function () {
        console.log( "hello" )

    },
    b: function () {
        console.log( "bellho" )
    },
    getElementById: function () {
        console.log("getelementmethod")
    }
}

auto.getElementById()
auto.a()

const result2 =  document.getElementById("result2")


const Autocontroller = {
    turnleft: function(){result2.innerHTML= "Turn left"},
    turnright: function(){result2.innerHTML= "Turn right"},
    forward: function(){result2.innerHTML="turning forward"},
    backward: function(){result2.innerHTML="turning backward"}
}


/* ------------ */
var buttonHeat = document.getElementById("btnHeat")
var inputVar = document.getElementById("insertHeatInput")
var resultHeat = document.getElementById("resultHeat")



/* effectieve berekening */
function toCelsius(f) {
    return (5/9) * (f-32);
  }

/* om de klik te visualiseren.  */
  function clickHandler(){
    document.getElementById("resultCal").innerHTML = 
    `Warmte in celsius is ${(Math.round(toCelsius(Number(inputVar.value))))}.`;
  }

  
/* 
  resultHeat.innerHTML = `Result is ${sumResult}` */