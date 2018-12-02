var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchHandler);

var addPostButton = document.getElementById("insert-button");
addPostButton.addEventListener("click", addPostModalHandler);

var addPhotoModal = document.getElementById("add-photo-modal");
var postButton = document.getElementById("post-button");
postButton.addEventListener("click", postHandler)
var cancelButton = document.getElementById("cancel-post-button");
cancelButton.addEventListener("click", modalCloseHandler)

var photoContainer = document.getElementById("photo-feed-container");
photoContainer.addEventListener("click", photoHandler);

var photoDetailModal = document.getElementById("photo-detail-modal");

var backdrop = document.getElementById("modal-backdrop");
backdrop.addEventListener("click", modalCloseHandler);

var toggleProfileButton = document.getElementById("toggle-profile-button");
toggleProfileButton.addEventListener("click", toggleProfileHandler);

var profileContainer = document.getElementById("profile-container");


function searchHandler(event) { //waiting for search functionality
    console.log("search button clicked");
    var searchInput = document.getElementById("search-input").value.toUpperCase();
    var captions = document.getElementsByClassName("caption-container");
    
  
}

function addPostModalHandler(event) {
    backdrop.classList.toggle("hidden");
    addPhotoModal.classList.toggle("hidden");
    //console.log("toggle modal hidden");
}

function postHandler(event) {
    var photoURL = document.getElementById("add-photo-url").value;
    var caption = document.getElementById("add-photo-caption").value;

    //add server interaction here
}



function photoHandler(event) {
    console.log("photo container clicked");
    if(event.target.classList.contains("image")) {
        console.log("event.target: ", event.target);
        backdrop.classList.toggle("hidden");
    }
    
    //template and server interaction here to load photo
    
}

//this also closes the modal after clicking on the background
function modalCloseHandler(event) {
    if(!addPhotoModal.classList.contains("hidden"))
        addPhotoModal.classList.add("hidden");
    backdrop.classList.toggle("hidden");
    document.getElementById("add-photo-url").value = "";
    document.getElementById("add-photo-caption").value = "";
}


function toggleProfileHandler(event) {
    toggleProfileButton.firstChild.classList.toggle("fa-chevron-circle-left");
    toggleProfileButton.firstChild.classList.toggle("fa-chevron-circle-right");
    profileContainer.classList.toggle("hidden");

}

