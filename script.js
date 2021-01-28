/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Hello from Wed App Dev Lab One !!!");

function likeIt(){
  
  alert("thank you for like it!! ;)")
}

function showHide() {
  let readMoreDiv = document.getElementById("readmore");
  if (readMoreDiv.style.display === "block") {
    readMoreDiv.style.display = "none";
  } else {
    readMoreDiv.style.display = "block";
  }
}

let message = document.getElementById('welcomeuser').innerHTML;


