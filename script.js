// Falling petal effect (using emojis for now)
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 20; i++) {
    let petal = document.createElement("div");
    petal.innerText = "🌸";
    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = Math.random() * -100 + "px";
    petal.style.fontSize = "24px";
    petal.style.opacity = Math.random();
    petal.style.animation = `fall ${5 + Math.random() * 5}s linear infinite`;
    document.body.appendChild(petal);
  }
  function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

});
