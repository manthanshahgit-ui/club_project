let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playPause = document.getElementById("play-pause");
let actionIcon = document.getElementById("action");

let currentTimeEl = document.getElementById("current-time");
let durationEl = document.getElementById("duration");

let songimg = document.querySelector('.song-img');


//mute button
let un_mute = document.querySelector('.mute');
let mute_btn = document.querySelector('#mutebtn');
let volume = 1;


//mood

// title change
let title=document.querySelector("#titlename");
let singer=document.querySelector("#singer")
let song_nt = {
 chill:[ {
    name: "Sooraj Dooba Hain.mp3",
    title: "Sooraj Dooba Hain",
    singer: "Arijit Singh, Aditi Singh Sharma"
  },
  {
    name: "Ishq Bulaava.mp3",
    title: "Ishq Bulaava",
    singer: "Sanam Puri, Shipra Goyal"
  },
  {
    name: "Ishq Bulaava.mp3",
    title: "Ishq Bulaava",
    singer: "Sanam Puri, Shipra Goyal"
  },
  {
    name: "Kashmir Main Tu Kanyakumari.mp3",
    title: "Kashmir Main Tu Kanyakumari",
    singer: "Arijit Singh, Sunidhi Chauhan"
  },
  {
    name: "Makhna.mp3",
    title: "Makhna",
    singer: "Tanishk Bagchi, Yasser Desai, Asees Kaur"
  }
 ],

garba: [
{    name: "Chogada.mp3",
    title: "Chogada",
    singer: "Darshan Raval, Asees Kaur"
},
  {
    name: "Dholida.mp3",
    title: "Dholida",
    singer: "Udit Narayan, Neha Kakkar"
  },
  {
    name: "Kesariyo Rang.mp3",
    title: "Kesariyo Rang",
    singer: "Lijo George-DJ Chetas"
  },
  {
    name: "Moti Veraana.mp3",
    title: "Moti Veraana",
    singer: "Amit Trivedi, Osman Mir"
  },
  {
    name: "Nagada Sang Dhol.mp3",
    title: "Nagada Sang Dhol",
    singer: "Shreya Ghoshal, Osman Mir"
  }
]};


//song changing
let F_url = "../assets/audio/";
let L_url = ['chill-with-me', 'hanuman'];
let song_url = document.querySelector("#songSource");
let next_track = document.querySelector(".next-track");
let prev_track = document.querySelector(".prev-track");
let mood = localStorage.getItem("mood");


let img = {

    chill: [
        "assets/img/chill/chill1.png"
    ],

    energetic: [
        "assets/img/energetic/energetic1.png"
    ],

    focus: [
        "assets/img/focus/focus1.png"
    ],

    garba: [
        "assets/img/garba/garba1.png"
    ],

    god: [
        "assets/img/god/god1.png"
    ],

    happy: [
        "assets/img/happy/happy1.png"
    ],

    melancholy: [
        "assets/img/melancholy/melancholy1.png"
    ],

    motivational: [
        "assets/img/motivational/motivational1.png"
    ],

    nostalgic: [
        "assets/img/nostalgic/nostalgic1.png"
    ],

    relaxed: [
        "assets/img/relaxed/relaxed1.png"
    ],

    sad: [
        "assets/img/sad/sad1.png"
    ],

    sleep: [
        "assets/img/sleep/sleep1.png"
    ]

};
let song_src = {
    chill: [
        "assets/audio/chill/Sooraj_Dooba_Hain.mp3",
        "assets/audio/chill/Ishq Bulaava - Lyrical Song _ Hasee Toh Phasee _ Sidharth_ Parineeti _ Vishal_ Shekhar _ Love Songs(MP3_160K).mp3",
        "assets/audio/chill/Ishq Bulaava Full Video - Hasee Toh Phasee_Parineeti_ Sidharth_Sanam Puri_ Shipra Goyal(MP3_160K).mp3",
        "assets/audio/chill/Kashmir Main Tu Kanyakumari(Lyrical)_Chennai Express _Shahrukh K_ Deepika P_Sunidhi C_Arijit S_Neeti(MP3_160K).mp3",
        "assets/audio/chill/Makhna - Drive _ Sushant Singh Rajput_ Jacqueline Fernandez _ Tanishk Bagchi_ Asees Kaur(MP3_160K).mp3"
    ],

    energetic: [
        "assets/audio/energetic/energetic1.mp3",
        "assets/audio/energetic/energetic2.mp3",
        "assets/audio/energetic/energetic3.mp3",
        "assets/audio/energetic/energetic4.mp3",
        "assets/audio/energetic/energetic5.mp3",
        "assets/audio/energetic/energetic6.mp3"
    ],

    focus: [
        "assets/audio/focus/focus1.mp3",
        "assets/audio/focus/focus2.mp3"
    ],

    garba: [
    "./assets/audio/garba/Chogada.mp3",
    "./assets/audio/garba/Dholida.mp3",
    "./assets/audio/garba/Kesariyo Rang.mp3",
    "./assets/audio/garba/Moti Veraana.mp3",
    "./assets/audio/garba/Nagada Sang Dhol.mp3"
    ],

    god: [
        "assets/audio/god/god1.mp3",
        "assets/audio/god/god2.mp3",
        "assets/audio/god/god3.mp3",
        "assets/audio/god/god4.mp3",
        "assets/audio/god/god5.mp3"
    ],
    happy: [
        'assets/audio/happy/happy1.mp3'
    ],
    melancholy: ['assets/audio/happy/happy1.mp3'],
    motivational: ['assets/audio/motivational/motivational1.mp3'],
    nostalgic: ['assets/audio/nostalgic/nostalgic1.mp3'],
    relaxed: ['assets/audio/relaxed/relaxed1.mp3'],
    sad: ['assets/audio/sad/sad1.mp3'],
    sleep: ['assets/audio/sleep/sleep1.mp3'],
};


let n = 0, p = song_src.length, play = false;

function formatTime(time) {
    
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);

    return minutes + ":" + seconds.toString().padStart(2, "0");
    
}

song.addEventListener("loadedmetadata", () => {
    
    progress.max = song.duration;
    progress.value = song.currentTime;

    durationEl.innerText = formatTime(song.duration);

});

playPause.addEventListener("click", () => {
    
    if (actionIcon.classList.contains("fa-play")) {
        
        song.play();
        play = true

        actionIcon.classList.remove("fa-play");
        actionIcon.classList.add("fa-pause");
        
        songimg.classList.add("song-img2");
        
    } else {
        
        song.pause();
        play = false
        
        actionIcon.classList.remove("fa-pause");
        actionIcon.classList.add("fa-play");
        
        songimg.classList.remove("song-img2");
        
    }
    
});

setInterval(() => {
    
    progress.value = song.currentTime;
    
    currentTimeEl.innerText = formatTime(song.currentTime);
    
}, 500);

progress.addEventListener("input", () => {
    
    song.currentTime = progress.value;
    
});

un_mute.addEventListener('click', () => {
    if (volume == 1) {
        mute_btn.classList.remove('fa-volume-xmark')
        mute_btn.classList.add('fa-volume-high')
        song.muted = true
        volume = 0
    }
    else {
        mute_btn.classList.remove('fa-volume-high')
        mute_btn.classList.add('fa-volume-xmark')
        volume = 1
        song.muted = false
    }
    
})

songimg.src = img[mood][0];
song.src = song_src[mood][0];

    title.innerText=song_nt[mood][0].title
    singer.innerText=song_nt[mood][0].singer

function song_ch(i) {
    if(mood=='chill' || mood=="graba"){
    title.innerText=song_nt[mood][i].title
    singer.innerText=song_nt[mood][i].singer
}
    song.src = song_src[mood][i];
    setTimeout(() => {
    }, 100);
    song.load()
    if (play == true)
        song.play()

}

next_track.addEventListener('click', () => {
    n = n + 1;
    if (song_src[mood].length <= n) { n = 0 }
    song_ch(n);
    p = n
})
prev_track.addEventListener('click', () => {
    n--;
    if (n < 0) { n = song_src[mood].length - 1 }
    song_ch(n);

})


