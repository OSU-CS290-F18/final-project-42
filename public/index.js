var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchHandler);
var searchTextInput = document.getElementById("search-text-input");
searchTextInput.addEventListener("keydown", function(event) {
    console.log("keydown");
    if(event.which === 13) {
        console.log("enter");
        searchHandler(event);
    }
});

var addPostButton = document.getElementById("insert-button");
addPostButton.addEventListener("click", addPostModalHandler);

var addPhotoModal = document.getElementById("add-photo-modal");
var postButton = document.getElementById("post-button");
postButton.addEventListener("click", postHandler)
var cancelButton = document.getElementById("cancel-post-button");
cancelButton.addEventListener("click", modalCloseHandler)

var photoFeedContainer = document.getElementById("photo-feed-container");
photoFeedContainer.addEventListener("click", photoHandler);

var photoDetailModal = document.getElementById("photo-detail-modal");

var backdrop = document.getElementById("modal-backdrop");
backdrop.addEventListener("click", modalCloseHandler);

var toggleProfileButton = document.getElementById("toggle-profile-button");
toggleProfileButton.addEventListener("click", toggleProfileHandler);

var profileContainer = document.getElementById("profile-container");

var profileSelect = document.getElementById("filter-profile");
profileSelect.addEventListener("change", profileChange);


function searchHandler(event) { 
    console.log("search button clicked");
    var text = searchTextInput.value.toUpperCase();

    console.log("search text:", text);
    var photocardContainer = document.getElementsByClassName("Photocard-container");
    var userStr = [];
    var captionStr = [];
    for(var i = 0; i < photocardContainer.length; i++) {
        userStr.push(photocardContainer[i].getAttribute("data-user"));
        userStr[i] = userStr[i].toUpperCase();
        captionStr.push(photocardContainer[i].getAttribute("data-caption"));
        captionStr[i] = captionStr[i].toUpperCase();
    }

    for(var j = 0; j < user.length; j++) {
        if(userStr[i].includes(text) || captionStr[i].includes(text)) {
            if(photocardContainer.classList.contains("hidden")) 
                photocardContainer.classList.toggle("hidden");
        }
        else {
            if(!photocardContainer.classList.contains("hidden"))
                photocardContainer.classList.add("hidden")
        }
    }
  
}

function addPostModalHandler(event) {
    backdrop.classList.toggle("hidden");
    addPhotoModal.classList.toggle("hidden");
    //console.log("toggle modal hidden");
}

function postHandler(event) {
    var photoURL = document.getElementById("add-photo-url").value;
    var caption = document.getElementById("add-photo-caption").value;

    console.log("posting...");
    var request = new XMLHttpRequest();
    var requestURL = "/addPost";
    request.open('POST', requestURL);
    var requestBody = JSON.stringify({ 
        photoURL: photoURL,
        caption: caption,
        name: profileSelect.value,
        likes: 0
    });
    request.setRequestHeader('Content-Type', 'application/JSON');
    request.addEventListener('load', function(event) {
        if(event.target.status === 200) {
            console.log("adding post");
            var postHTML = Handlebars.templates.post({
                photoURL: photoURL,
                caption: caption,
                name: profileSelect.value,
                likes: 0
            });
            photoFeedContainer.insertAdjacentElement("beforeend", postHTML);
        }
        else {
            console.log("error adding post");
        }
    });
    request.send(requestBody);

    
    
}



function photoHandler(event) {
    console.log("photo container clicked");
    if(event.target.classList.contains("post-image")) {
        console.log("image clicked, event.target: ", event.target);
        backdrop.classList.toggle("hidden");

    }
    if(event.target.classList.contains("like")) {
        console.log("liked, event.target: ", event.target);
        //increment like counter
        var numLikes = event.target.parentNode.firstChild;
        var request = new XMLHttpRequest();
        var requestURL = "/addLike";
        request.open('POST', requestURL);
        var requestBody = JSON.stringify({ likes: parseInt(numLikes.textContent)+1 });
        request.setRequestHeader('Content-Type', 'application/JSON');
        request.addEventListener('load', function(event) {
            if(event.target.status === 200) {
                console.log("added a like");
                numLikes.textContent = parseInt(numLikes.textContent)+1;
            }
            else {
                console.log("error adding like");
            }
        });
        request.send(requestBody);

    }
    
    
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

function profileChange(event) {    //reload the page with the correct profile
    console.log("change to profile:", profileSelect.value);
    
    var request = new XMLHttpRequest();
    var requestURL = "/" + profileSelect.value;

    request.addEventListener('load', function(event) {
        if(event.target.status === 200) {
            console.log("changed profiles");
        }
        else {
            console.log("error changing profiles");
        }

    });
    request.open('GET', requestURL);
    request.send();

}
