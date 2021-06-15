//inputFields//
const artist = document.getElementById('artist');
const songTitle = document.getElementById('song');
//-----------//
const button = document.getElementById('button');
const outputLyrics = document.getElementById('lyricsArea');
const showErrorTitle = document.getElementById("error-title");


function errorMessagesTitle(){ 
  let messages = "" // = error messages //
  
  if (songTitle.value === '' || songTitle === null) {
    messages = 'You must type in a song title.'
  } 

  if (messages.length > 0) {
    showErrorTitle.innerText = messages  
    return false
  } 
  return true
}

//--------------------Ovanför formvalidering , nedanför disable button---------------------------------------------------------//

artist.addEventListener("keyup", function(event){
  const value = event.target.value 

  if (value.length >=1 && value != " "){
    outputLyrics.innerText= ""
    button.removeAttribute("disabled")
  } else {
    outputLyrics.innerText= "Button won't work whitout an Artist "
    button.setAttribute("disabled",1) 
  }
})

//-----------------ovanför disable button, nedanför fetchen ---------------------------------//

   button.addEventListener("click", () => {
   const errorMessage = errorMessagesTitle() 
   
   
   if( errorMessage === true){
    const inputArtist = artist.value;
    const inputTitle = songTitle.value;
    messages = " "
    showErrorTitle.innerText = messages  

    fetch(`http://ianertson.com:3500/${inputArtist}/${inputTitle}`).then(function(response){
      response.json().then(data => {

        if(data.length === 0){
          outputLyrics.innerText= "uh oh! we couldn't find your lyrics"
        } else {
          outputLyrics.innerText = data[0].lyrics
        }
      })
    })
  }
});







