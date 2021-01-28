/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Hello from Wed App Dev Lab One !!!");

function likeIt(){
  
  alert("thank you for like it!! ;)")
}


function showHide(){
  
  let readMoreDive = document.getElementById("readmore!!"); 
  readMoreDive.style.color= "blue";
  if(readMoreDive.style.display == "block")
    {
      readMoreDive.style.display = "none";
    }
  else{ 
    readMoreDive.style.display = "block";
  }
}



