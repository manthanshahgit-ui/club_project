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
let title = document.querySelector("#titlename");
let singer = document.querySelector("#singer")
let song_nt = {
    chill: [{
        name: "assets/audio/chill/Sooraj_Dooba_Hain.mp3",
        title: "Sooraj Dooba Hain",
        singer: "Arijit Singh, Aditi Singh Sharma",
        img: "assets/img/chill/chill1.png"
    },
    {
        name: "assets/audio/chill/Ishq Bulaava - Lyrical Song _ Hasee Toh Phasee _ Sidharth_ Parineeti _ Vishal_ Shekhar _ Love Songs(MP3_160K).mp3",
        title: "Ishq Bulaava",
        singer: "Sanam Puri, Shipra Goyal",
        img: "assets/img/chill/chill1.png"
    },
    {
        name: "assets/audio/chill/Ishq Bulaava Full Video - Hasee Toh Phasee_Parineeti_ Sidharth_Sanam Puri_ Shipra Goyal(MP3_160K).mp3",
        title: "Ishq Bulaava",
        singer: "Sanam Puri, Shipra Goyal",
        img: "assets/img/chill/chill1.png"
    },
    {
        name: "assets/audio/chill/Kashmir Main Tu Kanyakumari(Lyrical)_Chennai Express _Shahrukh K_ Deepika P_Sunidhi C_Arijit S_Neeti(MP3_160K).mp3",
        title: "Kashmir Main Tu Kanyakumari",
        singer: "Arijit Singh, Sunidhi Chauhan",
        img: "assets/img/chill/chill1.png"
    },
    {
        name: "assets/audio/chill/Makhna - Drive _ Sushant Singh Rajput_ Jacqueline Fernandez _ Tanishk Bagchi_ Asees Kaur(MP3_160K).mp3",
        title: "Makhna",
        singer: "Tanishk Bagchi, Yasser Desai, Asees Kaur",
        img: "assets/img/chill/chill1.png"
    }
    ],


    garba: [
        {
            name: "./assets/audio/garba/Chogada.mp3",
            title: "Chogada",
            singer: "Darshan Raval, Asees Kaur",
            img: "assets/img/garba/garba1.png"
        },
        {
            name: "assets/audio/garba/Dholida.mp3",
            title: "Dholida",
            singer: "Udit Narayan, Neha Kakkar",
            img: "assets/img/garba/garba1.png"
        },
        {
            name: "./assets/audio/garba/Kesariyo Rang.mp3",
            title: "Kesariyo Rang",
            singer: "Lijo George-DJ Chetas",
            img: "assets/img/garba/garba1.png"
        },
        {
            name: "./assets/audio/garba/Moti Veraana.mp3",
            title: "Moti Veraana",
            singer: "Amit Trivedi, Osman Mir",
            img: "assets/img/garba/garba1.png"
        },
        {
            name: "./assets/audio/garba/Nagada Sang Dhol.mp3",
            title: "Nagada Sang Dhol",
            singer: "Shreya Ghoshal, Osman Mir",
            img: "assets/img/garba/garba1.png"
        }
    ],

    energetic: [

        {
            name: "assets/audio/energetic/Baarish_Half_Girlfriend.mp3",
            title: "Baarish",
            singer: "Ash King, Shashaa Tirupati",
            img: "assets/img/energetic/energetic1.png"
        },

        {
            name: "assets/audio/energetic/Bezubaan_Phir_Se.mp3",
            title: "Bezubaan Phir Se",
            singer: "Vishal Dadlani, Anushka Manchanda",
            img: "assets/img/energetic/energetic1.png"
        },

        {
            name: "assets/audio/energetic/Chalti_Hai_Kya_9_Se_12.mp3",
            title: "Chalti Hai Kya 9 Se 12",
            singer: "Dev Negi, Neha Kakkar",
            img: "assets/img/energetic/energetic1.png"
        },

        {
            name: "assets/audio/energetic/Dance_Basanti.mp3",
            title: "Dance Basanti",
            singer: "Vishal Dadlani, Anushka Manchanda",
            img: "assets/img/energetic/energetic1.png"
        },

        {
            name: "assets/audio/energetic/Dilbar.mp3",
            title: "Dilbar",
            singer: "Neha Kakkar, Dhvani Bhanushali, Ikka",
            img: "assets/img/energetic/energetic1.png"
        },

        {
            name: "assets/audio/energetic/Hard_Hard.mp3",
            title: "Hard Hard",
            singer: "Mika Singh, Prakriti Kakar",
            img: "assets/img/energetic/energetic1.png"
        },

        {
            name: "assets/audio/energetic/Milegi_Milegi.mp3",
            title: "Milegi Milegi",
            singer: "Mika Singh, Sachin-Jigar",
            img: "assets/img/energetic/energetic1.png"
        },

        {
            name: "assets/audio/energetic/Naach_Meri_Jaan.mp3",
            title: "Naach Meri Jaan",
            singer: "Arijit Singh",
            img: "assets/img/energetic/energetic1.png"
        },

        {
            name: "assets/audio/energetic/Nashe_Si_Chadh_Gayi.mp3",
            title: "Nashe Si Chadh Gayi",
            singer: "Arijit Singh",
            img: "assets/img/energetic/energetic1.png"
        },

        {
            name: "assets/audio/energetic/Nawabzaade_Tere_Naal_Nachna.mp3",
            title: "Tere Naal Nachna",
            singer: "Badshah, Sunanda Sharma",
            img: "assets/img/energetic/energetic1.png"
        },

        {
            name: "assets/audio/energetic/Aankh_Marey.mp3",
            title: "Aankh Marey",
            singer: "Neha Kakkar, Mika Singh, Kumar Sanu",
            img: "assets/img/energetic/energetic1.png"
        },

        {
            name: "assets/audio/energetic/Tamma_Tamma_Again.mp3",
            title: "Tamma Tamma Again",
            singer: "Badshah, Bappi Lahiri, Anuradha Paudwal",
            img: "assets/img/energetic/energetic1.png"
        }

    ],

    focus: [
        {
            name: "assets/audio/focus/focus1.mp3",
            img: "assets/img/focus/focus1.png"
        },
        {
            name: "assets/audio/focus/focus2.mp3",
            img: "assets/img/focus/focus1.png"
        }
    ],



    god: [

        {
            name: "assets/audio/god/Achutam_Keshavam.mp3",
            title: "Achutam Keshavam",
            singer: "Ankit Batra",
            img: "assets/img/god/god1.png"
        },

        {
            name: "assets/audio/god/Aigiri_Nandini.mp3",
            title: "Aigiri Nandini",
            singer: "Dipanwita Goswami",
            img: "assets/img/god/god1.png"
        },

        {
            name: "assets/audio/god/Aisi_Lagi_Lagan.mp3",
            title: "Aisi Lagi Lagan",
            singer: "Anup Jalota",
            img: "assets/img/god/god1.png"
        },

        {
            name: "assets/audio/god/Bholenath.mp3",
            title: "Bholenath",
            singer: "Millind Gaba, Ikka",
            img: "assets/img/god/god1.png"
        },

        {
            name: "assets/audio/god/Bolo_Har_Har_Har.mp3",
            title: "Bolo Har Har Har",
            singer: "Mithoon, Mohit Chauhan",
            img: "assets/img/god/god1.png"
        },

        {
            name: "assets/audio/god/Sun_Mata_Anjana.mp3",
            title: "Sun Mata Anjana",
            singer: "Sandeep Karosiya",
            img: "assets/img/god/god1.png"
        },

        {
            name: "assets/audio/god/Mahadev.mp3",
            title: "Mahadev",
            singer: "Krishna Beuraa",
            img: "assets/img/god/god1.png"
        },

        {
            name: "assets/audio/god/Mero_Radha_Ramana.mp3",
            title: "Mero Radha Ramana",
            singer: "Bhakti Marga",
            img: "assets/img/god/god1.png"
        },

        // {
        //     name: "assets/audio/god/Nobody_Can_Defeat.mp3",
        //     title: "Nobody Can Defeat",
        //     singer: "Religious India",
        //     img: "assets/img/god/god1.png"
        // },

        {
            name: "assets/audio/god/Shiv_Tandav_Stotram.mp3",
            title: "Shiv Tandav Stotram",
            singer: "Uma Mohan",
            img: "assets/img/god/god1.png"
        }

    ],
    happy: [{
        name: 'assets/audio/happy/happy1.mp3',
        img: "assets/img/happy/happy1.png"
    }
    ],
    melancholy: [
        {
            name: 'assets/audio/happy/happy1.mp3',
            img: "assets/img/melancholy/melancholy1.png"
        }],
    motivational: [
        {
            name: 'assets/audio/motivational/motivational1.mp3',
            img: "assets/img/motivational/motivational1.png"
        }],
    nostalgic: [
        {
            name: 'assets/audio/nostalgic/nostalgic1.mp3',
            img: "assets/img/nostalgic/nostalgic1.png"
        }],
    relaxed: [
        {
            name: 'assets/audio/relaxed/relaxed1.mp3',
            img: "assets/img/relaxed/relaxed1.png"
        }],
    sad: [
        {
            name: 'assets/audio/sad/sad1.mp3',
            img: "assets/img/sad/sad1.png"
        }],
    sleep: [
        {
            name: 'assets/audio/sleep/sleepy1.mp3',
            img: "assets/img/sleep/sleep1.png"
        }],
};


//song changing
let F_url = "../assets/audio/";
let L_url = ['chill-with-me', 'hanuman'];
let song_url = document.querySelector("#songSource");
let next_track = document.querySelector(".next-track");
let prev_track = document.querySelector(".prev-track");
let mood = localStorage.getItem("mood");



let n = 0, p = song_nt.length, play = false;

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

songimg.src = song_nt[mood][0].img;
song.src = song_nt[mood][0].name;

title.innerText = song_nt[mood][0].title
singer.innerText = song_nt[mood][0].singer

function song_ch(i) {
    if (mood == 'chill' || mood == "garba" || mood == 'energetic' || mood == 'god') {
        // title.innerText = song_nt[mood][i].name
        title.innerText = song_nt[mood][i].title
        singer.innerText = song_nt[mood][i].singer
    }
    song.src = song_nt[mood][i].name;
    setTimeout(() => {
    }, 100);
    song.load()
    if (play == true)
        song.play()

}

next_track.addEventListener('click', () => {
    n = n + 1;
    if (song_nt[mood].length <= n) { n = 0 }
    song_ch(n);
    p = n
})
prev_track.addEventListener('click', () => {
    n--;
    if (n < 0) { n = song_nt[mood].length - 1 }
    song_ch(n);

})


