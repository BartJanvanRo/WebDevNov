/*
 <table>
      <thead>
        <tr>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>jack</td>
        </tr>
      </tbody>
    </table>
*/

/* let elGen = t => document.createElement(t)

let table = elGen('table') // parent1
let tHead = elGen('thead') // sub-parent1
let tBody = elGen('tbody') // sub-parent2
let trOfthead = elGen('tr');
let th = elGen('th');
let trOfTbody = elGen('tr');
let td = elGen('td');

// thead begin
table.appendChild(tHead)
th.innerText="name"
trOfthead.appendChild(th)
tHead.appendChild(trOfthead)
// thead end

// tbody
td.innerText="jack"
trOfTbody.appendChild(td)
tBody.appendChild(trOfTbody)
table.appendChild(tBody) */

/* table.className ="table table-dark" */
/* document.querySelector('.container').appendChild(table)
 */
// https://i.picsum.photos/id/851/200/200.jpg?hmac=JVRP-bj1-hofsGmrxkRZ4VaDr699PvCv6i8zcc6n-GQ

/*  trOfthead.appendChild(th)
 tHead.appendChild(trOfthead)
 trOfTbody.appendChild(td)
 tBody.appendChild(trOfTbody)
 table.appendChild(tHead)
 table.appendChild(tBody)
  */

 

/*  function image() {
  var img = document.createElement("IMG");
  img.src = "https://i.picsum.photos/id/851/200/200.jpg?hmac=JVRP-bj1-hofsGmrxkRZ4VaDr699PvCv6i8zcc6n-G";
  $('#image').html(img); 
} */

/* td.image='https://i.picsum.photos/200'
trOfTbody.appendChild(td)
tBody.appendChild(trOfTbody)
table.appendChild(tBody)
console.log(table)    */

//-------------


// div creatie
var newDiv = document.createElement('div');



// class toevoegen
 newDiv.className= 'divContainer';

 // id toevoegen
 newDiv.id = 'generalDivId';

 // attribuut toevoegen
 newDiv.setAttribute ('title', 'hello div');

 // create text node

var newDivText = document.createTextNode('Hello world, toegevoegde tekst');

// add text to div
newDiv.appendChild(newDivText);

// zichtbaar maken in html
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

/*  console.log(newDiv); */

 container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30px'


//spreekt de knop functie aan= addEventListener
/* var button = document.getElementById('button').addEventListener('click', buttonClick);


//voert de verandering uit
function buttonClick(e){
  console.log('Button clicked')
  document.getElementById('header-title').textContent = 'changed';
  document.querySelector('#main').style.backgroundColor = '#f4f4f4'
 
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
console.log(e.clientX); // waar geclicked op muis

} */
var button = document.getElementById('button');

button.addEventListener('mousedown', runEvent)

function runEvent(e){
  console.log('EVENT TYPE: '+e.type);
}