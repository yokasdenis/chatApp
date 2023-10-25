let username = "";
const btn = document.getElementById("join-chat");
const usernameInput = document.getElementById("username-input");
const form = document.getElementById("form");
const chatroomContainer = document.querySelector(".chatroom-container");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  username = usernameInput.value;
  if (username) {
    form.style.display = "none";
    // make display as block of chatroom
    // container
    chatroomContainer.style.display = "block";
  }
});


// align-items will give alignment to all the divs present 
// inside the flex containter

// align self will only add alignment to specific div

// basic server and sockets

// promise combinations
