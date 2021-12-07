var Result;

var laptop_price =99.45524

Result = Number("10"); //maakt van string een nr
Result = parseInt("11") // idem
Result = parseFloat("10.4") //
Result = laptop_price.toFixed(2) // tot 2 cijfers achter de komma.

/* console.log(Result) */


/* array methods 
tostring
join
pop
push*/


var myBooks = ['book1', 'book2', 'book3', 'book4', 'book5']

Result = myBooks.toString() //tostring

//push method
myBooks.push('book6')
Result = myBooks

//pop method
myBooks.pop() // verwijderde laatste element.

Result = myBooks.join(" and ") // toevoeging in tekst

myBooks.shift() // verwijderd de eerste array stuk

Result = myBooks 


Result = myBooks.slice(0,2) // toont allene die onderdelen maar haalt die niet weg.
Result = myBooks

var n1 =[1,2,3,4,5,6,7]
Result = n1.concat([8,9])

var randomNumbers = [232,12,14,123213]

Result = randomNumbers.sort(function(a,b){return a-b})  //orden van klein naar groot

Result = randomNumbers.forEach(function(num){console.log(num)}) //orden en zet onder elkaar



console.log(Result)

var names = ['jack', 'mike', 'george'];
var ulList = document.getElementById('namelist')

/* names.forEach(function(x){
    console.log(x,i)
    ulList.innerHTML += `<li>${x}</li>`
}) */

names.forEach(function(x){
    console.log(x)
    ulList.innerHTML += `<li>${x}</li>`
})








