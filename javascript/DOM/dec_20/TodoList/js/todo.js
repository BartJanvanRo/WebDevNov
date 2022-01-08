/* const todoInput = document.querySelectorAll('todoId')

const addBtn = document.querySelector('.addBtn')
const addTotoBodyForAlert = document.querySelector('addTodoBody')
const todoDate = document.querySelector('.todoDate')
const removeFromList = document.querySelector('.fa-remove')
const listGroupOfTodos = document.querySelector('.list-group')

let g = t=>document.createElement(t)

function responseMessage(alertType, message){
    let divAlert = g ('div')
    divAlert.className = `allert alert-${alertType}`
    divAlert.setAttribute('role', 'alert')
    divAlert.innerHTML = `${message}`
addTotoBodyForAlert.appendChild(divAlert)
setTimeout(function(){divAlert.remove()
},2000)

return divAlert
}

addBtn.addEventListener('click',function(e){
    e.preventDefault();
    
    let obj ={
        todo_title: todoInput.value,
        todo_date: todoDate.value
    }
    console.log(obj);

    If(todoInput !=""){
        responseMessage('succes', 'Todo added')
        listGroupOfTodos.innerHTML+=
        <li class="list-group-item d-flex justify-content-between"></li>

    }else{
        responseMessage('danger', 'Error!')
    }

}) */



/*
    <li class="list-group-item d-flex justify-content-between">
                        My todo titleDELETE ME
                        <a href="#" class="delete-item"> 
                            <i class="fa fa-remove"></i> 
                        </a>
                    </li>
*/

const todoInput = document.querySelector('#todoId')  // deze moet ik koppelen aan locale opslag
const addTodoBtn = document.querySelector('#btnId')
const addTodoBodyForAlert = document.querySelector('.addTodoBody')
const todoDate = document.querySelector('.todoDate')
const ListGroupOfTodos = document.querySelector('.todoList')
const taskSearcher = document.querySelector('.tasks-title')

let g = t => document.createElement(t)

//tijdelijk bericht
function responseMessage(alertType, message) {
    let divAlert = g('div')
    divAlert.className = `alert alert-${alertType}`
    divAlert.setAttribute('role', 'alert')
    divAlert.innerHTML = `${message}`
    addTodoBodyForAlert.appendChild(divAlert)
    setTimeout(function () {
        divAlert.remove();
    }, 2000)
}


//vind de kruis
ListGroupOfTodos.addEventListener('click', (event) => {
    if (event.target.className === 'fa fa-remove') {
        //run here
        let findParent = event.target.parentElement.parentElement
        findParent.remove();
    }
})


let arrayE = []

addTodoBtn.addEventListener('click', e => {  //click -> ingebouwde functie
    e.preventDefault();

    let inputDataArray = {
        todo_title: todoInput.value,
        todo_date: todoDate.value
    }
    console.log(inputDataArray)

    
    if (todoInput.value != "") {
        responseMessage('success', 'Todo added')
        // success
        ListGroupOfTodos.innerHTML +=
         `<li class="list-group-item d-flex justify-content-between">
            ${todoInput.value} - ${todoDate.value}
             <a href="#" class="delete-item"> 
            <i class="fa fa-remove"></i> 
        </a>
        </li>`
        
       /*  console.log() */
       arrayE.push(inputDataArray)
       localStorage.setItem('inputDataArray', JSON.stringify(arrayE))



    } else {
        responseMessage('danger', 'Error!')
    }
})

//onderstaande gebruikt de bovenstaande element uit html maar hoe met de knop gekoppeld weet ik terug niet meer.
function TestRemove(getEl) { //getEl trashicon
    //  e.preventDefault();
    console.log(getEl.parentElement.parentElement.parentElement)
    getEl.parentElement.parentElement.parentElement.remove()
}



filter.addEventListener('keyup', function (e) {
    //console.log(filter.value)
    //
    const listOfTodos = document.querySelectorAll('.list-group-item')

    listOfTodos.forEach(function (todo) {
        let filterValue = filter.value
        let todoTitle = todo.textContent.trim()
        
        todoTitle = todoTitle.substring(0, todoTitle.length - 2)
        console.log(todoTitle)
        console.log(filterValue.indexOf(todoTitle))
        if (filterValue.indexOf(todoTitle) === -1) {
            todo.setAttribute('style', 'display:none !important',)
        } else {
            todo.setAttribute('style', 'display:flex !important',)
        }

    })
})



/* result = JSON.parse(localStorage.getItem('inputDataArray'))
 */

