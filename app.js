//Variables
let isPlaying;
let startAnimation;

let happyBluesSong = document.querySelector("#happyblues-song");
let getDownSong = document.querySelector("#getdown-song");
let somethingSilhouetteSong = document.querySelector("#somethingsilhouette-song");

//Functions

//Menu
function openNav() {
  document.querySelector("#full-menu").style.height = "100%";
  document.querySelector("#preorder").style.display = "none";
}

function closeNav() {
  document.querySelector("#full-menu").style.height = "0%";
  document.querySelector("#preorder").style.display = "block";
}


//Songs
var songs = [happyBluesSong, getDownSong, somethingSilhouetteSong];

function playSong(e) {
  let songNbr = e.target.dataset.number - 1;
  if (!songs[songNbr].paused) {
    songs[songNbr].pause();
    startAnimation = false;
    e.target.style.filter = "grayscale(0%)";
  } else {
    songs[songNbr].play();
    pauseOtherSongs(songs[songNbr]);
    startAnimation = true;
    e.target.style.filter = "grayscale(100%)";
  }
}

function pauseOtherSongs(songNbr) {
  let songcover = document.querySelectorAll(".song-container li");

  songcover.forEach(function (cover) {
    cover.style.filter = "grayscale(0%)";
  });

  for (let i = 0; i < songs.length; i++) {
    if (songs[i] != songNbr) {
      songs[i].pause();
    }
  }
}


//svg sound wave
let waveLength = window.innerWidth * 2;

let xs = [];
for (var i = 0; i <= waveLength; i++) {
  xs.push(i);
}

let t = 0;

function animate() {
  let points = xs.map(x => {
    let y = 200 + 20 * Math.sin((x + t) / 15);

    return [x, y];
  });

  let path =
    "M" +
    points
      .map(p => {
        return p[0] + "," + p[1];
      })
      .join(" L");

  document.querySelector("#path1").setAttribute("d", path);

  if (startAnimation === true) {
    t += 0.8;
  } else {
    t += 0;
  }
  requestAnimationFrame(animate);
}

animate();


//inspiration behind songs
let songNames = document.querySelectorAll("#song-name-list ul li");
for (var i = 0; i < songNames.length; i++) {
  songNames[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

let intros = document.querySelectorAll("#song-intro-container div");

function showIntro(e) {
  var current = document.getElementsByClassName("show");
  current[0].className = current[0].className.replace("show", "");

  if (e.target.id == "song-name-1") {
    document.querySelector("#song-intro-1").className += " show";
  } else if (e.target.id == "song-name-2") {
    document.querySelector("#song-intro-2").className += " show";
  } else if (e.target.id == "song-name-3") {
    document.querySelector("#song-intro-3").className += " show";
  } else if (e.target.id == "song-name-4") {
    document.querySelector("#song-intro-4").className += " show";
  }
}
