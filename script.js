console.log("asd asd asd asd asd asd asd");

//initializing the variables
let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterplay');
let mastersongname=document.getElementById('mastersongname');
let myProgressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songname:"showtime",filepath: "songs/1.mp3",coverpath:"cover1.jpg"},
    {songname:"Long Time",filepath: "songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"Tu hai Kahan",filepath: "songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Be Strong",filepath: "songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"Come out",filepath: "songs/5.mp3",coverpath:"covers/5.jpg"}, 
    {songname:"Hall of Fame",filepath: "songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"never stop",filepath: "songs/7.mp3",coverpath:"covers/7.jpg"},
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        mastersongname.innerText=songs[songindex].songname;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        mastersongname.innerText=songs[songindex].songname;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressbar.value=progress;

});

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressbar.value*audioElement.duration)/100;
})

const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}

// document.getElementsByClassName('songitemplay').addEventListener('click', ()=>{
//     if(audioElement.paused)
//     {

//     }
//     else
//     {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity=0;
//     }
// })


Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplay();
        songindex = parseInt(e.target.id);

        // Toggle play/pause
        if (audioElement.src.includes(`songs/${songindex + 1}.mp3`) && !audioElement.paused) {
            // If it's the same song and is currently playing, pause it
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        } else {
            // If it's a new song or the current song is paused, play it
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songindex + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            mastersongname.innerText = songs[songindex].songname;
        }
    });
});





//new
// Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeallplay();
//         songindex = parseInt(e.target.id);

//         // Check if the audio is currently playing
//         if (audioElement.paused) {
//             // If paused, play the audio
//             e.target.classList.remove('fa-play-circle');
//             e.target.classList.add('fa-pause-circle');
//             audioElement.src = `songs/${songindex + 1}.mp3`;
//             audioElement.currentTime = 0;
//             audioElement.play();
//             gif.style.opacity = 1;
//             masterPlay.classList.remove('fa-play-circle');
//             masterPlay.classList.add('fa-pause-circle');
//             mastersongname.innerText = songs[songindex].songname;
//         } else {
//             // If playing, pause the audio
//             e.target.classList.remove('fa-pause-circle');
//             e.target.classList.add('fa-play-circle');
//             audioElement.pause();
//             gif.style.opacity = 0;
//             masterPlay.classList.remove('fa-pause-circle');
//             masterPlay.classList.add('fa-play-circle');
//         }
//     });
// });



//old
// Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//     makeallplay();
//     songindex=parseInt(e.target.id);
//     e.target.classList.remove('fa-play-circle');
//     e.target.classList.add('fa-pause-circle');
//     audioElement.src=`songs/${songindex+1}.mp3`;
//     audioElement.currentTime=0;
//     audioElement.play();
//     gif.style.opacity=1;
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//     mastersongname.innerText=songs[songindex].songname;
//     })
// })

document.getElementById('previous').addEventListener('click' ,()=>{
    if(songindex<=0)
    {
        songindex=0;
    }
    else
    {
        songindex-=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    mastersongname.innerText=songs[songindex].songname;
})

document.getElementById('next').addEventListener('click' ,()=>{
    if(songindex>=9)
    {
        songindex=0;
    }
    else
    {
        songindex+=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        mastersongname.innerText=songs[songindex].songname;

})







//   audioElement.addEventListener('timeupdate', () => {
//     // Update seekbar
//     const progress = (audioElement.currentTime / audioElement.duration) * 100;
//     myProgressbar.value = progress;

//     // Update the displayed song duration and timestamp for the specific song item
//     updateSongDuration(audioElement.currentTime, audioElement.duration, songindex);
// });

// // Function to update the displayed song duration and timestamp
// function updateSongDuration(currentTime, duration, index) {
//     // Format the time in MM:SS format
//     const formattedCurrentTime = formatTime(currentTime);
//     const formattedDuration = formatTime(duration);

//     // Update the song duration element and timestamp for the specific song item
//     const songDurationElement = document.getElementById(`${index}`);
//     if (songDurationElement) {
//         songDurationElement.textContent = `${formattedCurrentTime} / ${formattedDuration}`;
//     }
// }

// // Function to format time in MM:SS format
// function formatTime(time) {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     const formattedTime = `${(minutes < 10 ? '0' : '')}${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
//     return formattedTime;
// }
document.getElementById('home').addEventListener('click', function() {
    
});

document.getElementById('about').addEventListener('click', function() {
    window.location.href = 'about.html'; 
  });
