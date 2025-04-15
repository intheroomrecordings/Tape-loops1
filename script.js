const loopFiles = [
  "audio/loop1.mp3",
  "audio/loop2.mp3",
  "audio/loop3.mp3",
  "audio/loop4.mp3"
];

const audioElements = loopFiles.map((src, i) => {
  const audio = new Audio(src);
  audio.loop = true;
  audio.volume = 0.5;
  return audio;
});

document.querySelectorAll(".play-btn").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const audio = audioElements[i];
    if (audio.paused) {
      audio.play();
      btn.textContent = "■";
    } else {
      audio.pause();
      btn.textContent = "▶";
    }
  });
});

document.querySelectorAll(".volume-slider").forEach((slider, i) => {
  slider.addEventListener("input", (e) => {
    audioElements[i].volume = parseFloat(e.target.value);
  });
});
