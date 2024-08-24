console.log("Hello");
let songIndex=0;
let audioElement=new Audio('songs/5.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Girls Know", filePath:"songs/1.mp3" , coverPath:"covers/cover.jpg"},
    {songName:"Corny Candy  ", filePath:"songs/2.mp3" , coverPath:"covers/cover2.jpg"},
    {songName:"In Orchid  ", filePath:"songs/3.mp3" , coverPath:"covers/cover3.jpg"},
    {songName:"Low Noon     ", filePath:"songs/4.mp3" , coverPath:"covers/cover4.jpg"},
    {songName:"Sweet Heart  ", filePath:"songs/5.mp3" , coverPath:"covers/cover5.jpg"},
    {songName:"Blue Ribbon ", filePath:"songs/6.mp3" , coverPath:"covers/cover6.jpg"},
    {songName:"Hear Bells   ", filePath:"songs/7.mp3" , coverPath:"covers/cover7.jpg"}
    
]

songItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});



masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        gif.style.opacity=0;
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        
    }
})

audioElement.addEventListener('timeupdate',()=>{
     
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value =progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');


    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src='songs/6.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src='songs/2.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src='songs/4.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})