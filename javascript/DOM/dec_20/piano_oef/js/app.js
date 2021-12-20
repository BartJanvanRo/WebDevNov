let allBttn = document.querySelectorAll('.key')

let notes = document.querySelectorAll('audio')

function PlayAudio(keyNumber) {
    notes.forEach(audio => { //audio is een parameter verkort voor html audiofragment
        let getKeyOfAudio = audio.getAttribute('data-key') //de data-key is de tag van zowel de knop als de audiofile

        if (getKeyOfAudio == keyNumber) { //vergelijkt en stuurt de data-key aan.
            audio.play();
        }
    })
}


//links button to action
function pressKeyboard(pressB){
pressB.event.which()
Let getKey = pressKeyboard
}


//picsum.photos/200


allBttn.forEach(el => {
    //    console.log('data-key');
    //set action
    el.addEventListener('click'/* click action name/html dom event */, (e => {
        //addEventListener stuurt de reactie aan bijv. hover of click.
        // console.log('click')
        //   //play audio
        e.preventDefault()
        let getKey = el.getAttribute('data-key') // zet de drukknop om in een functie.
        PlayAudio(getKey)
    })
    )
})
