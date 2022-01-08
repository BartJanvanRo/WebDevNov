 

/* increaseBtnID
decreaseBtnID
resetBtnID
resultDisplayId */

let increaseInput = document.querySelector('#increaseBtnID');
let decreaseInput = document.querySelector('#decreaseBtnID');
let resetInput = document.querySelector('#resetBtnID');
let resultOutput = document.querySelector('#resultDisplayId');
let buttons = document.querySelectorAll('.btn');
let numberCreated = 0




increaseInput.addEventListener('click', function(clickerScreen){
    clickerScreen.preventDefault()
numberCreated++ 
resultOutput.innerHTML= numberCreated
localStorage.setItem("numberCreated", numberCreated)
})

decreaseInput.addEventListener('click', function(clickerScreen){
    clickerScreen.preventDefault()
numberCreated-- 
resultOutput.innerHTML= numberCreated
localStorage.setItem("numberCreated", numberCreated)
})

resetInput.addEventListener('click', function(clickerScreen){
    clickerScreen.preventDefault()
numberCreated = 0 
resultOutput.innerHTML= numberCreated
localStorage.setItem("numberCreated", numberCreated)
})




