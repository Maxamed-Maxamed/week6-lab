/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Hello from Wed App Dev Lab One !!!");

function hideWelcome()
{
  let welcomeuser = prompt("what is your name?");
  let welcomeuserid= document.getElemnetById("welcome user"); 
  welcomeuserid.style.display = "block";
  document.getElementById("welcomeuser").innerHTML = '<p> Hello,' 
  welcomeuserid.style
}