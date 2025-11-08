const btsCover = document.getElementById("Bts-section");
const charlieCover = document.getElementById("charlie-section");
const backBtn = document.querySelector(".back-btn");
const btsSongs = document.getElementById("bts-song-list");
const charlieSongs = document.getElementById("charlie-song-list");
let currentAudio = null;

// Hide back button and song lists initially
backBtn.style.display = "none";
btsSongs.style.display = "none";
charlieSongs.style.display = "none";

// BTS click
btsCover.addEventListener("click", () => {
  btsSongs.style.display = "grid";
  charlieSongs.style.display = "none";
  btsCover.style.display = "none";
  charlieCover.style.display = "none";
  backBtn.style.display = "block";
});

// Charlie click
charlieCover.addEventListener("click", () => {
  charlieSongs.style.display = "grid";
  btsSongs.style.display = "none";
  btsCover.style.display = "none";
  charlieCover.style.display = "none";
  backBtn.style.display = "block";
});

// Back button
backBtn.addEventListener("click", () => {
  btsCover.style.display = "flex";
  charlieCover.style.display = "flex";
  btsSongs.style.display = "none";
  charlieSongs.style.display = "none";
  backBtn.style.display = "none";
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

// Play/Pause Logic
document.querySelectorAll(".song-card").forEach(card => {
  const playBtn = card.querySelector(".playSvg");
  const pauseBtn = card.querySelector(".pauseSvg");
  const songSrc = card.getAttribute("data-song");
  const audio = new Audio(songSrc);

  playBtn.style.display = "none";

  pauseBtn.addEventListener("click", () => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      document.querySelectorAll(".song-card").forEach(c => {
        c.querySelector(".playSvg").style.display = "none";
        c.querySelector(".pauseSvg").style.display = "block";
      });
    }
    audio.play();
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
    currentAudio = audio;
  });

  playBtn.addEventListener("click", () => {
    audio.pause();
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
  });

  audio.addEventListener("ended", () => {
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
  });
});
