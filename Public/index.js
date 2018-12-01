var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchButtonHandler);

var photoContainer = document.getElementById("photo-feed-container");
photoContainer.addEventListener("click", photoHandler);

var backdrop = document.getElementById("modal-backdrop");
backdrop.addEventListener("click", modalHandler);


function searchButtonHandler(event) { //waiting for search functionality
    console.log("search button clicked");
    var searchInput = document.getElementById("search-input").value.toUpperCase();
    var captions = document.getElementsByClassName("caption-container");
    
  
}

function photoHandler(event) {
    console.log("photo container clicked");
    if(event.target.classList.contains("image")) {
        console.log("event.target: ", event.target);
        backdrop.classList.toggle("hidden");
    }
    var modalPhoto = Handlebars.templates.modalPhoto({
        photoURL: event.target
    });
    backdrop.insertAdjacentElement("beforeend", modalPhoto); //change this line later
}

//this just closes the modal after clicking on the background
function modalHandler(event) {
    backdrop.classList.toggle("hidden");
   
}

//need to add server functionality and store the data
function addPost(photoURL, hearts, person, caption) {
    var postHTML = Handlebars.templates.post({
        photoURL: photoURL,
        hearts: hearts,
        person: person,
        caption: caption
    });

    photoContainer.insertAdjacentElement("beforeend", postHTML);
}