// console.log("Hyy, Mukund");

var songs = [
    {
        // id: "1",
        imgSrc: "./Thumbnil/Aaj sajeya.jfif",
        audioSrc: "./Audio/aj sajeya.mp3",
        title: "Aaj Sajeya",
    },

    {
        // id: "2",
        imgSrc: "./Thumbnil/chand baaliya.jfif",
        audioSrc: "./Audio/CHAAND_BAALIYAN_SONG_FULL_VERSION__ADITYA__A__ATHER_ZAIN(256k).mp3",
        title: "Chand Baaliya-",
    },

    {
        id: "3",
        imgSrc: "./Thumbnil/Ayat.jfif",
        audioSrc: "./Audio/_Aayat__Full_Song_with_Lyrics__Bajirao_Mastani(256k).mp3",
        title: "Ayat-Arijit Singh",
    },

    {
        id: "4",
        imgSrc: "./Thumbnil/chitta.jpg",
        audioSrc: "./Audio/Chitta_(Full_Video)__Shiddat__Sunny_Kaushal,_Radhika_Madan,_Mohit_R_,Diana_P__Manan_Bhardwaj(256k).mp3",
        title: "Chitta-",
    },

    {
        id: "5",
        imgSrc: "./Thumbnil/JUG-JUG-JEEVE-LYRICS-Shiddat.jpg",
        audioSrc: "./Audio/Jug_Jug_Jeeve_(Full_Video)__Shiddat__Diana_P,_Mohit_R__Sachet_T_Parampara_T_Sachin_-_Jigar(256k).mp3",
        title: "Jug Jug Jeeve-",
    },

    {
        id: "6",
        imgSrc: "./Thumbnil/Khushi-Jab-Bhi-Teri-Lyrics-1024x576.jpg",
        audioSrc: "./Audio/Khushi_Jab_Bhi_Teri_Song__Jubin_Nautiyal,_Khushali_Kumar__Khushi_Jab_Bhi_Teri_Mein_Kam_Dekhta_Hun(256k).mp3",
        title: "Khushi Jab Bhi Teri-Jubir N.",
    },

    {
        id: "7",
        imgSrc: "./Thumbnil/love me like u do.jfif",
        audioSrc: "./Audio/Ellie_Goulding_-_Love_Me_Like_You_Do_(Official_Video)(256k).mp3",
        title: "Love me Like-Ellie Goulging",
    },

    {
        id: "8",
        imgSrc: "./Thumbnil/maiya menu.jfif",
        audioSrc: "./Audio/Maiyya_Mainu_-_Lyrical__Jersey__Shahid_Kapoor,_Mrunal_Thakur_Sachet-Parampara_Shellee__Gowtam_T(256k).mp3",
        title: "Maiya Menu-",
    },

    {
        id: "9",
        imgSrc: "./Thumbnil/mast nazro.jpg",
        audioSrc: "./Audio/_Mast_Nazron_Se__Rochak_K_ft_Jubin_Nautiyal,_Nikita_Dutta__Manoj_M__Ashish_P__Bhushan_K(256k).mp3",
        title: "Mast Nazro - Jubir N.",
    },

    {
        id: "10",
        imgSrc: "./Thumbnil/Rait Zara si.jpg",
        audioSrc: "./Audio/_Rait_Zara_Si_Full_Video_@A._R._RahmanAkshay,_Dhanush,Sara,Arijit,_Shashaa__Bhushan_K(256k).mp3",
        title: "Rait Zara Si-",
    },

    {
        id: "11",
        imgSrc: "./Thumbnil/shiddat-title-track-manan-bhardwaj-392x272.jpg",
        audioSrc: "./Audio/Shiddat_Title_Track_(Full_Video)_Sunny_Kaushal,Radhika_Madan,_Mohit_Raina,_Diana_P__Manan_Bhardwaj(256k).mp3",
        title: "Shiddat Title-Manan Bhardwaj",
    },

    {
        id: "12",
        imgSrc: "./Thumbnil/ve tu.jpg",
        audioSrc: "./Audio/Ve_Tu_(Video)_Sunidhi_Chauhan,_Jatinder_Shah__Shaheer_Sheikh,_Surbhi_Jyoti,_Digangna_S__Vinder(256k).mp3",
        title: "Ve Tu-",
    },
]

function playAudio(songid) {
    // var music = songs.find(function (geet, index) {
    //     return songs.id === songid
    // });
    var song = songs[songid];

    // console.log(song);
    document.getElementById("thumbnaill").src = song.imgSrc;
    document.getElementById("audio_player").src = song.audioSrc;
    document.getElementById("audio_player_title").innerText = song.title;
}