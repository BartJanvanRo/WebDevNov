// window object

let value;

value = window;
value = window.Number('5')

window.WebDeveloper = (arg)=>{
    console.log(arg)
}

/* value = window.WebDeveloper('jack') */

value = window.outerWidth
value = window.outerHeight

/*  om de pagina in grootte te laten aanpassen, doet normaal css.

window.addEventListener('resize',(e)=>{
     console.log(`${window.outerWidth}\n${window.outerHeight}`)
 })
 */



value = window.document

value = document.body


value = document.scripts
value = document.all
value = document.location



value = document.links

console.log(value)

value = window.Romeo
//document.location.reload()
value = document.links[0]
value = document.links[0].className = "btn btn-danger btn-lg"
value = document.links[0].getAttribute('key')

/* // forms 
value = document.forms
value = document.forms[0]
value = document.forms[0].id
value = document.forms[0].method



console.log(value) */

