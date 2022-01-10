const addBtn = document.querySelector('#add-movieID')
const tableBody = document.querySelector('tbody')
const removeItems = document.querySelector('#films')

console.log(removeItems)

//inkomende array, beschrijvende namen, nog geen data
const [movie_name, director_name, image_url] = document.querySelectorAll('input')

//array opslaan
let filmsArray = []

//data ophalen via functie
addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let movieKey = {
        movie_name: movie_name.value,
        director_name: director_name.value,
        image_url: image_url.value,
    }
    console.log(movieKey);
    //brengt de array naar het algenemen array
    filmsArray.push(movieKey)
    console.log(filmsArray)
    localStorage.setItem('movieKey', JSON.stringify(filmsArray))

//om op de pagina te plaatsen
    tableBody.innerHTML += ` 
                                          <td><img src="${movieKey.image_url}" class="img-fluid img-thumbnail"></td>
                                          <td>"${movieKey.director_name}"</td>
                                          <td>${movieKey.movie_name}"</td>
                                          <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Movie</a></td>
                                        </tr > `

    
});

window.addEventListener('DOMContentLoaded',(loadFromMemory)=>{
    let listNew = JSON.parse(localStorage.getItem("movieKey"))
    
    console.log(listNew)

      
    listNew.forEach(movieList =>{
        console.log(movieList)
      tableBody.innerHTML +=`<tr>
 <td><img src=${movieList.image_url} class="img-fluid img-thumbnail"></td>
 <td>${movieList.movie_name}</td>
 <td>${movieList.director_name}</td>
 <td><a href="#" id = "delete-film" class = "btn btn-danger" onclick="TestRemove(this)" >Delete Movie</a></td>
 </tr>`
 filmsArray = listNew  })
    

})

function TestRemove(getEl) { //getEl trashicon
    //  e.preventDefault();
    console.log(getEl.parentElement.parentElement.parentElement)
    getEl.parentElement.parentElement.parentElement.remove()
}





removeItems.addEventListener('click',(event)=>{
    
    event.preventDefault();
    // addeventlistener scope
    if(event.target.className === 'btn btn-danger'){
        // run here
        let findParent = event.target.parentElement
        findParent = event.target.parentElement.parentElement.parentElement
        console.log(findParent)
        findParent.remove();

    }

})

console.log('btn btn-danger')
