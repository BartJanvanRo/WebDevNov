/* comparison operators */


/* equal to operator */


var result;

/* alleen value */
result = 1 == 1 /* true, kijkt naar value */
result = 1 == 2 /* false, kijkt naar inhoud/value */
result = 1 == "1" /* true, kijkt naar value */
result = 1 == "2" /* false, kijkt naar value */
result = "intec" == "intec" /* true, kijkt naar value */
result = "intec" == "Intec" /* false, kijkt naar value hoofdletter verschil*/
result = true == true //true
result = false == true //false
result = false == false //true
result = [] == []; //false
result = ['1'] == ['1']; //false, onafhankelijke array's, dus ongelijk.
result = {} == {}; //false, onafhankelijke objecten. 
result = null == null //true, zijn beide inhoudsloos (niet toegewezen), dus gelijk.
result = undefined == null //true, zijn beide inhoudsloos (niet toegewezen), dus gelijk.
result = undefined == undefined //true, zijn beide inhoudsloos (niet toegewezen), dus gelijk.

/* equal value and equal datatype  ===  checks datatype and value*/
result = 1 === "1" /* false, kijkt naar type */
result = undefined === undefined //true, zelfde datatype.
result = undefined === null //false, andere datatype.
result = [undefined] === [undefined] //false, zelfde datatype maar arrays zijn altijd verschillend van elkaar.
/* rest dezelfde. */

/* not equal to: != */

result = 1 != 1 /* false, want ze zijn gelijk */
result = 1 != 2 /* true, want ze zijn onggelijk */
result = 1 != "1" /* false, want ze zijn gelijk */
result = 1 !== "1" /* true, want ze zijn ongelijk in type */
/* {} en[] zijn onafhankelijke objecten dus altijd ongelijk, inhoud altijd dynamisch dus onafhankelijk*/


/* groter dan operator > */

result = 5 > 6 //false
result = 0 > 0 //false
result = -10 > 10 //false

/* minder dan operator < */

result = 6 < 3 //false
result = 3 < 2.5 //false
result = 2.5 < 3 //true
result = true > false // true is 1 en false is 0


// groter dan of gelijk


result = 5 >= 6 //false, twee controles
result = 6 >= 6 //true, twee controles, 1 van de voorwaardes voldaan. 
result = 6 >= "6" //true, twee controles, 1 van de voorwaardes voldaan, datatype niet gecontroleerd.

// kleiner dan of gelijk


result = 10 <= 9 //false
result = 9 <= 10 //true


var myArray = [1, 2, 3, 4, 5]
var myArray1 = [1, 2, 3, 4, 5, 6]


result = myArray.length
result = myArray1.length
result = myArray.length <= myArray1.length

/* logical operators */

/* and operator && */

result = 11 > 10 /* true */ && 9 < 8 /* false */
/* beide condities moeten juist zijn of result is false */
result = 11 > 10 /* true */ && null == undefined /* true, dus beide true */


/* or (OF) operator || */

result = 1 === 1 || 10 > 100 // 1 juist dus alles juist. 


/* NOT(niet) operator */

result = !(1 == 1) //false, is een inversie
result = !(1 > 10) //true, is een inversie

result = (true == true) === (false == false)

result = !((true == true) === (false == false))

//ternary operator

result = 1 == 1 ? 'yes' : 'no'
result = 10 <= 1 ? 'Intec' : "brussel"
result = "computer" === "computer" ? "yes is true" : "nope" /* hiermee kun je true : false personiseren */
result = "computer" === "laptop" ? "yes is true" : "nope " //nope wordt getoond.




console.log(result)


/* nodemon naam javascript.js eerst map oproepen via cd en via cd.. terug naar bovestaande map. */
myAge = 15;

/* if (myAge >= 18&& myAge <= 30) <- is inversie */

myAge2 = 19;

/* if (myAge < 18 || myAge > 88){
    console.log("Nope, geen alcohol")
}
else{
    console.log("je mag drinken")
}


if (myAge2 < 18 || myAge2 > 88){
    console.log("Nope, geen alcohol")
}
else{
    console.log("je mag drinken")
} */

/* myAge3 =  15 >= 18 ? "Je mag drinken" : "nee je mag niet drinken" 

console.log(myAge3)
 */
personArray = [{ Name: "jaap", myAge: 20 }, { Name: "els", myAge: 19 }, { Name: "oudere man", myAge: 50 } ]



/* personArray[0].myAge >= 18 ? "Je mag drinken" : "nee, je mag niet drinken"

console.log(result) */

console.log(personArray[0].myAge)
console.log(personArray[0].Name)
result = personArray[0].Name != undefined ? (personArray[0].myAge >= 18 ? "Je mag drinken" : "nee, je mag niet drinken") : "student naam niet gevonden";
result2 = personArray[1].Name != undefined ? (personArray[1].myAge >= 18 ? "Je mag drinken" : "nee, je mag niet drinken") : "student naam niet gevonden";

console.log(result)
console.log(personArray[1].myAge)
console.log(personArray[1].Name)
console.log(result2)


if(personArray[0].myAge <= 18 ){
    console.log("Nope, geen alcohol")
}
else{
    console.log("je mag drinken, zuiperd")
}

if(personArray[0].myAge >= 18 && personArray[0].myAge <=30){
    console.log("jong persoon")
} // 18-30 tm
else{
    console.log("ouder persoon")
}


if(personArray[1].myAge >= 18 && personArray[1].myAge <=30){
    console.log("jong persoon")
} // 18-30 tm
else{
    console.log("ouder persoon")
}

if(personArray[2].myAge >= 18 && personArray[2].myAge <=30){
    console.log("jong persoon")
} // 18-30 tm
else{
    console.log("ouder persoon")
}

/* javascript.info. dan fundamentele klikken en begrijpen. */