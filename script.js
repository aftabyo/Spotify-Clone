console.log("asd asd asd asd asd asd asd");

//initializing the variables
let songIndex=0;
let audioElement=new Audio('showtime.mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressbar=document.getElementById('myprogressbar');
audioElement.play();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

// myProgressbar.addEventListener('time');