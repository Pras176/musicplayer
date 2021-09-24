const music=document.querySelector('audio');
const img=document.querySelector('img');
const play=document.getElementById('play');
const title=document.getElementById('title');
const artist=document.getElementById('artist');
const prev=document.getElementById('prev');
const next=document.getElementById('next');

const songs=[
    {
    name:"Param Sundari",
    title:"Param Sundari",
    artist:"Shreya Ghosal",
    },
    {
    name:"Paani Paani ",
    title:"Paani Paani",
    artist:"Badshah",
    },
    {
    name:"Coca Cola",
    title:"Coca cola",
    artist:"onny Kakkar",
    },
    {
    name:"Disco Balma",
    title:"Disco Balma",
    artist:"Badshah",
    }
]

isPlaying=false;
play.addEventListener("click",()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
});
//for play function
const playMusic=()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");

};
//for pause function
const pauseMusic=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");

};

//changing music data
const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="music/"+songs.name+".mp3";
    img.src="images/"+songs.name+".jpg";    
};
songIndex=0;
//loadSong(songs[3]);
const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong=()=>{
    songIndex=(songIndex-1 + songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);