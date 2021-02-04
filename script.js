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

function welcomeUser() {
  let username = prompt("What's your name?");
  let welcomeUserDiv = document.getElementById("welcomeuser");
  welcomeUserDiv.style.display = "block";
  document.getElementById('welcomeuser').innerHTML = '<p> Hello, ' + username + ', looking forward to hearing your playlists! </p>';
  welcomeUserDiv.style.cursor = "pointer";
}


const sonatas = {
  title: 'Beethoven Sonatas',
  songs: [
    {
      title: 'Piano Sonata No. 3',
      artist: 'Beethoven',
    },
    {
      title: 'Piano Sonata No. 7',
      artist: 'Beethoven',
    },
    {
      title: 'Piano Sonata No. 10',
      artist: 'Beethoven',
    }
  ]
};


for (let i in sonatas.songs){
  document.write("Song: " + sonatas.songs[i].title + " Artist: " + sonatas.songs[i].artist + "<br>");
}


$(document).ready(function(){

  $("#tableoutput").html("<h2 class='ui header'>" + sonatas.title + "</h2>");

  $("#tableoutput").append("<table class='ui fixed striped table'><thead><tr><th>Song</th><th>Artist</th></thead><tbody>");

  for (let i in sonatas.songs){
        $("#tableoutput tr:last").after("<tr><td>" + sonatas.songs[i].title + "</td><td>" + sonatas.songs[i].artist + "</td></tr>");
  }

  $("#tableoutput").append("</tbody></table>");

});



