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
    button.removeAttribute("disabled")
  } else {
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

    fetch(`https://api.lyrics.ovh/v1/${inputArtist}/${inputTitle}`).then(function(response){
      response.json().then(data => {
        outputLyrics.innerText=data.lyrics
      })
    }).catch(err =>{
      outputLyrics.innerText= "uh oh..! we couldn't find your song!"
      console.log(err)
    }); 
  } 
});






