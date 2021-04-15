var audio = new Audio();

var progress = document.getElementById('_progress');
var timeAct = document.getElementById('_time_act');
var timeFull = document.getElementById('_time_full');
var title = document.getElementById('_title');
var artist = document.getElementById('_artist');
var image = document.getElementById('_img');

audio.addEventListener('canplay', () => {
    timeAct.innerHTML = formater(audio.currentTime);
    timeFull.innerHTML = formater(audio.duration);
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}, false);

audio.addEventListener('timeupdate', () => {
    timeAct.innerHTML = formater(audio.currentTime);
    progress.value = audio.currentTime;
}, false);

var index = 0;
var playList = [
    { file: '/src/bandas/bj/musics/bed-of-roses.mp3', title: 'Bed of Roses', artist: 'Bon Jovi', image: '/src/bandas/bj/album2.jpg' },
    { file: '/src/bandas/bj/musics/never-say-goodbye.mp3', title: 'Never say goodbye', artist: 'Bon Jovi', image: '/src/bandas/bj/album1.jpg' },
    { file: '/src/bandas/bj/musics/its-my-life.mp3', title: 'Its my life', artist: 'Bon Jovi', image: '/src/bandas/bj/album3.jpg' }
];

const load = () => {
    audio.src = playList[index].file;
    audio.load()
    title.innerHTML = playList[index].title;
    artist.innerHTML = playList[index].artist;
    image.src = playList[index].image;
}

const play = () => {
    audio.play();
    document.getElementById('_play').setAttribute('hidden', 'true')
    document.getElementById('_pause').removeAttribute('hidden')
}

const onChangeTimeUpdate = (value) => {
    audio.currentTime = value;
    play();
}

const onChangeVolume = (value) => {
    audio.volume = (value / 100);
}

const pause = () => {
    audio.pause();
    document.getElementById('_pause').setAttribute('hidden', 'true')
    document.getElementById('_play').removeAttribute('hidden')
}

const previous = () => {
    index--;
    if (index < 0) { index = playList.length - 1 }

    audio.src = playList[index].file;
    audio.load();
    audio.play();
    title.innerHTML = playList[index].title;
    artist.innerHTML = playList[index].artist;
    image.src = playList[index].image
}

const next = () => {
    index++;
    if (index >= playList.length) { index = 0 }

    audio.src = playList[index].file;
    audio.load();
    audio.play();
    title.innerHTML = playList[index].title;
    artist.innerHTML = playList[index].artist;
    image.src = playList[index].image
}

const formater = (sec) => {

    sec = Math.floor(sec);
    let HH = Math.floor(sec / 3600);
    let mm = Math.floor((sec - (HH * 3600)) / 60);
    let ss = sec - (HH * 3600) - (mm * 60);

    mm < 10 ? mm = "0" + mm : null
    ss < 10 ? ss = "0" + ss : null

    return time = `${mm}:${ss}`;
}