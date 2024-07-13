console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName("songitem"));

let songs = [
  {
    songName: "Main-Tera",
    filePath: "songs/1.mp3",
    coverPath: "img/cover.jpg",
  },
  {
    songName: "Tera-Fitoor",
    filePath: "songs/2.mp3",
    coverPath: "img/gen.jpg",
  },
  {
    songName: "Kahani-suno",
    filePath: "songs/3.mp3",
    coverPath: "img/kah.jpg",
  },
  { songName: "Humsafar", filePath: "songs/4.mp3", coverPath: "img/ply.jpg" },
  { songName: "Lofi-Sad", filePath: "songs/5.mp3", coverPath: "img/arj.jpg" },
];

songitems.forEach((Element, i) => {
  console.log(Element, i);
  Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  Element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbar.value = progress;
});

myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});
const makeallplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (Element) => {
      Element.classList.remove("fa-pause-circle");
      Element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (Element) => {
    Element.addEventListener("click", (e) => {
      makeallplays();
      index = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${index + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();

      //     audioElement.src = "songs/2.mp3";
      //     audioElement.currentTime = 0;
      //     audioElement.play();
      masterplay.classList.remove("fa-play-circle");
      masterplay.classList.add("fa-pause-circle");
    });
  }
);
