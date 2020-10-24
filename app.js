//play songs

let isPlaying;
let playAnimation;

let happyblues = document.querySelector("#happyblues");
let getdown = document.querySelector("#getdown");
let somethingsilhouette = document.querySelector("#somethingsilhouette");

function openNav() {
  document.querySelector("#full-menu").style.height = "100%";
  document.querySelector("#preorder").style.display = "none";
}

function closeNav() {
  document.querySelector("#full-menu").style.height = "0%";
  document.querySelector("#preorder").style.display = "block";
}


var songs = [happyblues, getdown, somethingsilhouette];

function playSong(e) {
  let songNbr = e.target.dataset.number - 1;
  if (!songs[songNbr].paused) {
    songs[songNbr].pause();
    playAnimation = false;
    e.target.style.filter = "grayscale(0%)";
  } else {
    songs[songNbr].play();
    pauseOtherSongs(songs[songNbr]);
    playAnimation = true;
    e.target.style.filter = "grayscale(100%)";
  }
}

function pauseOtherSongs(playingSong) {
  let songcover = document.querySelectorAll(".song-container li");

  songcover.forEach(function (cover) {
    cover.style.filter = "grayscale(0%)";
  });

  for (let i = 0; i < songs.length; i++) {
    if (songs[i] != playingSong) {
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

  if (playAnimation === true) {
    t += 0.8;
  } else {
    t += 0;
  }
  requestAnimationFrame(animate);
}

animate();

//intros for each band member

let namesList = document.querySelectorAll("#names ul li");
for (var i = 0; i < namesList.length; i++) {
  namesList[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

let intros = document.querySelectorAll("#intro-txt div");

function showIntro(e) {
  var current = document.getElementsByClassName("show");
  current[0].className = current[0].className.replace("show", "");

  if (e.target.id == "name1") {
    document.querySelector("#name1-intro").className += " show";
  } else if (e.target.id == "name2") {
    document.querySelector("#name2-intro").className += " show";
  } else if (e.target.id == "name3") {
    document.querySelector("#name3-intro").className += " show";
  } else if (e.target.id == "name4") {
    document.querySelector("#name4-intro").className += " show";
  }
}
