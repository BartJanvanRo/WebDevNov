var person = {
    firstName: "Joe",
    familyName: "Dalton",
    age: 29,
    livingPlace: "Aalst",
    isStudent: true,
    email: "joe@joe.com"
}




if (person.age >= 18 && person.livingPlace === "Aalst" && person.isStudent === true) {
    console.log(person)
}
else if (person.familyName === "Dalton") {
    console.log("lastname is correct, in this case", person.familyName)
}
else {
    console.log("default fault")
}



/* var userImput = prompt('Please at number!!!!!!');

console.log(typeof Number(userImput))  /// zet string om naar cijfer.

2 */
3
4
5

function findOddEven() { //verwijst naar de knop
    //get the input value
    var num = document.getElementById('num').value; //var num is de input 

    //if the remainder value is 0 then it is an even number
    //we are using % modulus operator to get the remainder value
    if (isNaN(num)) {
        document.getElementById('result').innerHTML = 'Is geen getal';
    }
    else if (num % 2 == 0) {
        document.getElementById('result').innerHTML = num + ' is een even getal.';
    }
    else {
        document.getElementById('result').innerHTML = num + ' is een oneven getal.';
    }
}

/* isNaN = is Not a Number method */

console.log(isNaN(num)) // geeft true indien geen nummer, false indien cijfer.