var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchButtonHandler);

var photoContainer = document.getElementById("photo-feed-container");
photoContainer.addEventListener("click", photoHandler);

var backdrop = document.getElementById("modal-backdrop");
backdrop.addEventListener("click", modalHandler);


function searchButtonHandler(event) {
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
}

function modalHandler(event) {
    backdrop.classList.toggle("hidden");
}