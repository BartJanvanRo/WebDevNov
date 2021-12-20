//dom methods


// get element by id


let value; document.getElementById('todo-form')


/* value = document.getElementsByTagName('*')

value = Array.from(value)


/* function ForEachFunction (el){
    console.log(el)
    el.remove()
}

value.forEach(ForEachFunction) */


//wamp server, voor locale server om cms te testen. wordpress om te testen, cms te leren. 


/* value = document.getElementsByClassName('card-body') */




// querySelector if id = #, if class =.
/* 
value = document.querySelector('.card-header')  // selecteert de eerste

value = document.querySelectorAll('.card-header')  // selecteert ze allemaal




value.forEach(el=>{
    console.log(el)
})

value = document.querySelectorAll('.card-header') */

const [first, second, third] = document.querySelectorAll('.card-header')

/* console.log(first, second, third)  */ 

// html stuk insturen van javascript


value = document.createElement('p')
value.className="lead text-danger font-weight-bold"
value.innerHTML="this is text paragraph"
third.append(value)




// custom function for create element
let elGen = t => document.createElement(t)
let findAll = selector => document.querySelectorAll(selector)

value =  elGen('div')
value = elGen('a')
value.href= "google.com";
value.innerHTML= "Click google";

value = findAll('.delete-item')

 value.forEach(btn=>{
     console.log(btn)
     btn.addEventListener('click', function(e){ 
         e.preventDefault()
         console.log("hello click")
               
     })
 })

// console.log(value);
/* value = findAll('div');
 */
/* 
console.log(value)  
 */
