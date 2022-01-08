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


//picsum.photos/200



let audios = document.querySelectorAll('audio')
 


console.log(audios);

// Converting to array using Array.from() method
const arrayMusic = Array.from(audios);
console.log(arrayMusic);



document.addEventListener('keydown', e => {
    //addEventListener stuurt de reactie aan bijv. hover of click.
    e.preventDefault()
    console.log(e.key)
    //   //play audio
    let keySoundArray = [65, 83,70, 71,72,74, 75, 76]
    if (e.key == 'a') {
        PlayAudio(keySoundArray[0])
    }
    if (e.key == 's') {
        PlayAudio(keySoundArray[1])
    }
    if (e.key == 'd') {
        PlayAudio(keySoundArray[2])
    }
    if (e.key == 'f') {
        PlayAudio(keySoundArray[3])
    }
    if (e.key == 'g') {
        PlayAudio(keySoundArray[4])
    }
    if (e.key == 'h') {
        PlayAudio(keySoundArray[5])
    }
    if (e.key == 'j') {
        PlayAudio(keySoundArray[6])
    }
    if (e.key == 'k') {
        PlayAudio(keySoundArray[7])
    }
    if (e.key == 'l') {
        PlayAudio(keySoundArray[8])
    }



/*     audios.forEach((singleaudio)=>{

        array.push(singleaudio.getAttribute('data-key'))
        console.log(array.push)
        }) */
