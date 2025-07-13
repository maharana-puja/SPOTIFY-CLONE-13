console.log("Welcome to Spotify");

//intialize the Variables
let songIndex = 0;
let audioElement= new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "warriyo - Mortals (feat. Laura Brehem) [NCS Release]", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq - muslim song", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Humraah - sad song", filePath: "song/2.mp", coverPath: "covers/3.jpg"},
    {songName: "Collide - Atittude girl", filePath: "song/3.mp3", coverPath: "covers/4.jpg"},
    {songName: "Shayad - (love aaj kal)", filePath: "song/3.mp3", coverPath: "covers/5.jpg"},
    {songName: "Asiquee - Sradha kapoor..", filePath: "song/4.mp3", coverPath: "covers/6.jpg"},
    {songName: "Gallia - sad song this audio", filePath: "song/5.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ride it - atittude boy ", filePath: "song/7.jpg", coverPath: "covers/8.jpg"},
    {songName: "Paro - listen to right altermadia", filePath: "song/8..jpg", coverPath: "covers/9.jpg"},
    {songName: "Tera hone laga hu - (sad and lyrisycal song)", filePath: "song/9.jpg", coverPath: "covers/10.jpg"},
]

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogressBar.value = progress;
})
myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})