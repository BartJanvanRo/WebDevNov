 var webdevnov = 1
 var webdevnov1 = 20

 console.log(webdevnov)
 console.log(webdevnov1)


var smartphone = "samsung"
var smartphone = "apple"
var smartphone = "android"

smartphone = "android"

console.log(smartphone)
/* om in terminal te zien: cd javascript "de map die je moet controleren" 
dan naam "tut_nummer en dan naam.js" 

eerste keer nodejs installeren. 
*/

/* const en let variablen */

const firstName = "Jack"
/* const firstName = "mike" */
/* werkt niet kan niet hergebruiken: constant */
/* firstName = "mike" -> idem probleem */
console.log(firstName)

let companyName = "intec brussel"

/* let companyName = "Microsoft" -> gaat ook niet */

companyName = "Apple" /* updaten kan dus wel */
console.log(companyName)


/* 
var can be re-declared and updated
con can't be re-declared nor be updated
let can't be re-declared  can be updated
*/

/* con wordt vooral gebruikt voor tokens en wachtwoorden */


/* let en die ander MAG NIET met cijfers of speciale tekens beginnen, 
behalve underscore, dat mag wel en er mag ook geen spatie in de naam zitten.  
*/

var _number1=9
var _number2=2

/* result = _number1 / _number2 */




var mySalary = 31200;
var Months = 12
var taxPercentage = 35

var monthlyBruto = mySalary / Months 
var monthlyNetto = monthlyBruto - ((monthlyBruto / 100) * taxPercentage)

console.log(monthlyBruto)
console.log(monthlyNetto)

_number1++

result = _number1++



/* console.log(result, _number1++)
 */
_number1--
_number1--
_number1--


result = _number1
console.log(result)


/* pow is exponenten tot de 2de macht */
/* math.pow */


/* string */

var result;
result = "this is a string";
result = 10
result = true;
result = "String" + 4



console.log("result=>",typeof result)

const myDB = ["Atoyan", "Uruk", "me"]
/* const is hier handig omdat de arry niet overschreven kan worden, 
verschillenden delen van de inhoud wel */

myDB[0]="Japie"
console.log(myDB)

const db = ['1',true, _number1]
console.log(db)


const personInfo = {
    nameFirst: 'Bart',
    nameFamily: 'van Rossum',
    age: 40,
    birthPlace: 'Wijchen'
}


personInfo.livingPlace= "Antwerpen"
delete personInfo.birthPlace

console.log(personInfo)



/* publieke public api's om te gebruiken.  */



/* codinggame.com or codecombat. */



var age2 = 5;

while (age2 < 10) {
    console.log("Jonger dan 10");
    age2++;
}

console.log("Je bent ouder dan 10")


/* kan gemakkelijker, ingebouwde var 
heeft geen var benaming nodig */

for (age3 = 5; age3 < 10; age3++){
    console.log("-10 jaar");
}

console.log("+ 10 jaar")


