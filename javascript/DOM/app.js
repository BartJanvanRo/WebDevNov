// window object


/* value = window.WebDeveloper('jack') */

/* value = window.outerWidth
value = window.outerHeight */

/*  om de pagina in grootte te laten aanpassen, doet normaal css.

window.addEventListener('resize',(e)=>{
     console.log(`${window.outerWidth}\n${window.outerHeight}`)
 })
 */



/* value = window.document

value = document.body


value = document.scripts
value = document.all
value = document.location



value = document.links */



/* value = window.Romeo
//document.location.reload()
value = document.links[0]
value = document.links[0].className = "btn btn-danger btn-lg"
value = document.links[0].getAttribute('key')

console.log(value) */
/* // forms 
value = document.forms
value = document.forms[0]
value = document.forms[0].id
value = document.forms[0].method



console.log(value) */

//document object model
/* console.dir(document); <--alles in het document, dir is natuurlijk directory, zelfs aanpasbaar in terminal*/
/* console.log(document.domain) -> local host
 */
/* console.log(document.URL)  -> local host */ 
/* console.log(document.title); zo kunnen we vele selecteren*/

/* console.log(document.getElementById('header-title')) */

var headerTitle = document.getElementById('header-title') 

headerTitle.textContent = 'Hello'; // volgt de stijl niet
headerTitle.innerHTML = 'Goodbye'; // volgt de stijl wel
headerTitle.innerHTML = '<h2>test</h2>' // stijl wijziging

/* headerTitle.textContent = 'Hello'; // volgt de stijl niet
headerTitle.innerHTML = 'Goodbye'; // volgt de stijl wel
headerTitle.innerHTML = '<h2>test</h2>' // stijl wijziging */


/* console.log(document.getElementById('header-title')) */
 
//headerTitle.style.border =

/* var items = document.getElementsByClassName('form-group row');

console.log(items);
console.log(items[1]); */

/* items[1].style.background = gray -> werkt niet, moet via loop
 */
 



//backgroundcolor aanpassen form


 var header = document.querySelector('h1');

 header.style.borderBottom = 'solid 4px #ccc';

 var input = document.querySelector('input');
input.value = 'Hello world'


var itemList = document.querySelector('#header-title');


console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#a8c2e1'


itemList = document.querySelector('#first-form');
console.log(itemList.children);
