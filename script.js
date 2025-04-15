const loops = [
  new Audio("loop1.mp3"),
  new Audio("loop2.mp3"),
  new Audio("loop3.mp3"),
  new Audio("loop4.mp3")
];

loops.forEach(loop => {
  loop.loop = true;
});

document.querySelectorAll(".loop-player").forEach((player, index) => {
  const playBtn = player.querySelector(".play-btn");
  const stopBtn = player.querySelector(".stop-btn");
  const volumeSlider = player.querySelector(".volume-slider");

  playBtn.addEventListener("click", () => {
    loops[index].play();
  });

  stopBtn.addEventListener("click", () => {
    loops[index].pause();
    loops[index].currentTime = 0;
  });

  volumeSlider.addEventListener("input", () => {
    loops[index].volume = volumeSlider.value;
  });

  // Add touch event for mobile devices
  volumeSlider.addEventListener("touchmove", () => {
    loops[index].volume = volumeSlider.value;
  });
});
