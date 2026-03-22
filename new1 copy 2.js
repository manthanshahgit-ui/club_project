let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playPause = document.getElementById("play-pause");
let actionIcon = document.getElementById("action");

let doc = document.getElementById("body");
let vol_per = document.getElementById("volu-per");

let currentTimeEl = document.getElementById("current-time");
let durationEl = document.getElementById("duration");

let songimg = document.querySelector(".song-img");

//mute button
let un_mute = document.querySelector(".mute");
let mute_btn = document.querySelector("#mutebtn");
// let volume = 1;

//mood

// title change
let title = document.querySelector("#titlename");
let singer = document.querySelector("#singer");

const musicpath = "./assets/audio/";
const imgBase = "assets/img/";
let song_nt = {
    chill: {
        img: "chill/chill1.png",
        songs: [
            "Sooraj_Dooba_Hain.mp3",
            "Ishq_Bulaava.mp3",
            "Ishq_Bulaava1.mp3",
            "Kashmir_Main_Tu_Kanyakumari.mp3",
            "Makhna.mp3",
        ],
    },

    garba: {
        img: "garba/garba1.png",
        songs: [
            "Chogada.mp3",
            "Dholida.mp3",
            "Kesariyo_Rang.mp3",
            "Moti_Veraana.mp3",
            "Nagada_Sang_Dhol.mp3",
        ],
    },

    energetic: {
        img: "energetic/energetic1.png",
        songs: [
            "Baarish.mp3",
            "Bezubaan_Phir_Se.mp3",
            "Dilbar.mp3",
            "Hard_Hard.mp3",
            "Milegi_Milegi.mp3",
            "Aankh_Marey.mp3",
        ],
    },

    focus: {
        img: "focus/focus1.png",
        songs: ["focus1.mp3", "focus2.mp3"],
    },

    god: {
        img: "god/god1.png",
        songs: [
            "Achutam_Keshavam.mp3",
            "Aigiri_Nandini.mp3",
            "Aisi_Lagi_Lagan.mp3",
            "Bholenath.mp3",
            "Bolo_Har_Har_Har.mp3",
            "Sun_Mata_Anjana.mp3",
            "Mahadev.mp3",
            "Mero_Radha_Ramana.mp3",
            "Shiv_Tandav_Stotram.mp3",
        ],
    },
    sad: {
        img: "sad/sad1.png",
        songs: ["sad1.mp3"],
    },
    happy: {
        img: "happy/happy1.png",
        songs: ["happy1.mp3"],
    },
    nostalgic: {
        img: "nostalgic/nostalgic.png",
        songs: ["nostalgic1.mp3"],
    },
    sleepy: {
        img: "sleepy/sleepy1.png",
        songs: [
        'sleepy1.mp3'    
        ],
    },
    melancholy: {
        img: "melancholy/melancholy1.png",
        songs: [
        'melancholy1.mp3'    
        ],
    },
    motivational: {
        img: "motivational/motivational1.png",
        songs: [
        'motivational1.mp3'    
        ],
    },
    relaxed: {
        img: "relaxed/relaxed1.png",
        songs: [
        'relaxed1.mp3'    
        ],
    },
};
let singer_nt = {
    chill: [
        "Arijit Singh, Aditi Singh Sharma",
        "Sanam Puri, Shipra Goyal",
        "Sanam Puri, Shipra Goyal",
        "Arijit Singh, Sunidhi Chauhan",
        "Tanishk Bagchi, Yasser Desai, Asees Kaur",
    ],

    garba: [
        "Darshan Raval, Asees Kaur",
        "Udit Narayan, Neha Kakkar",
        "Lijo George-DJ Chetas",
        "Amit Trivedi, Osman Mir",
        "Shreya Ghoshal, Osman Mir",
    ],

    energetic: [
        "Ash King, Shashaa Tirupati",
        "Vishal Dadlani, Anushka Manchanda",
        "Dev Negi, Neha Kakkar",
        "Vishal Dadlani, Anushka Manchanda",
        "Neha Kakkar, Dhvani Bhanushali, Ikka",
        "Mika Singh, Prakriti Kakar",
        "Mika Singh, Sachin-Jigar",
        "Arijit Singh",
        "Arijit Singh",
        "Badshah, Sunanda Sharma",
        "Neha Kakkar, Mika Singh, Kumar Sanu",
        "Badshah, Bappi Lahiri, Anuradha Paudwal",
    ],

    god: [
        "Ankit Batra",
        "Dipanwita Goswami",
        "Anup Jalota",
        "Millind Gaba, Ikka",
        "Mithoon, Mohit Chauhan",
        "Sandeep Karosiya",
        "Krishna Beuraa",
        "Bhakti Marga",
        "Uma Mohan",
    ],
    sad: ["sad song"],
    happy: ["happy song"],
    nostalgic: ["nostalgic song"],
    sleepy: ["sleep song"],
    melancholy: ["melancholy song"],
    motivational: ["motivational song"],
    relaxed : ["relaxed song"],
    focus : ["focus song"],
};

//song changing
let song_url = document.querySelector("#songSource");
let next_track = document.querySelector(".next-track");
let prev_track = document.querySelector(".prev-track");

let mood = localStorage.getItem("mood");
// mood=null
if (mood == null) mood = "chill";

let n = 0,
    p = song_nt.length,
    play = false;

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

function togglesong() {
    if (actionIcon.classList.contains("fa-play")) {
        song.play();
        play = true;

        actionIcon.classList.remove("fa-play");
        actionIcon.classList.add("fa-pause");

        songimg.classList.add("song-img2");
    } else {
        song.pause();
        play = false;

        actionIcon.classList.remove("fa-pause");
        actionIcon.classList.add("fa-play");

        songimg.classList.remove("song-img2");
    }
}

setInterval(() => {
    progress.value = song.currentTime;

    currentTimeEl.innerText = formatTime(song.currentTime);
}, 500);

progress.addEventListener("input", () => {
    song.currentTime = progress.value;
});

function volume() {
    mute_btn.classList.remove("fa-volume-up", "fa-volume-low", "fa-volume-off");
    if (song.volume >= 0.65) {
        mute_btn.classList.add("fa-volume-up");
    } else if (song.volume >= 0.1) {
        mute_btn.classList.add("fa-volume-low");
    } else {
        mute_btn.classList.add("fa-volume-off");
    }
    vol_per.innerText = `${Math.round(song.volume * 100)}%`;
}

function getTitle(filename) {
    return filename.replace(".mp3", "").replaceAll("_", " ");
}

let len = song_nt[mood].songs.length;

function audio(mood, k) {
    songpath1 = musicpath + mood + "/" + song_nt[mood].songs[k];
    return songpath1;
}
imgPath = imgBase + song_nt[mood].img;
songimg.src = imgPath;
song.src = audio(mood, 0);

title.innerText = getTitle(song_nt[mood].songs[0]);
singer.innerText = singer_nt[mood][0];

function song_ch(i) {
    if (
        mood == "chill" ||
        mood == "garba" ||
        mood == "energetic" ||
        mood == "god"
    ) {
        title.innerText = getTitle(song_nt[mood].songs[i]);
        singer.innerText = singer_nt[mood][i];
    }
    song.src = audio(mood, i);
    setTimeout(() => { }, 100);
    song.load();
    if (play == true) song.play();
}

//nextsong
song.addEventListener("ended", () => {
    next_song();
});
function next_song(params) {
    n++;
    if (n >= len) {
        n = 0;
    }
    n++;
    song_ch(n);
}
function nex_track() {
    n = n + 1;
    if (len <= n) {
        n = 0;
    }
    song_ch(n);
    p = n;
}
function pre_track() {
    n--;
    if (n < 0) {
        n = len - 1;
    }
    song_ch(n);
}

playPause.addEventListener("click", togglesong);
next_track.addEventListener("click", nex_track);
prev_track.addEventListener("click", pre_track);
un_mute.addEventListener("click", () => {
    if (song.volume == 1) song.volume = 0;
    else song.volume = 1;
    volume();
});

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "KeyP") {
        togglesong();
        // console.log("Space or P Pressed")
    } else if (e.code === "ArrowRight") {
        nex_track();
        // console.log("Right arrow pressed")
    } else if (e.code === "ArrowLeft") {
        pre_track();
        // console.log("Left arrow pressed")
    }
    if (e.code === "ArrowUp" || e.code === "ArrowDown") {
        let step = e.code === "ArrowUp" ? 0.05 : -0.05;

        if (song.volume >= 1 && step > 0) return;
        if (song.volume <= 0 && step < 0) return;

        song.volume = Math.round((song.volume + step) * 100) / 100;

        volume();
        // console.log(song.volume);
    }
});
