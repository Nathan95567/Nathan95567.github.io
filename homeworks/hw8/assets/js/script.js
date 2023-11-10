document.getElementById("blue-box")
function toggleSongs() {
    var songsSecondHalf = document.getElementById("songs-second-half");
    songsSecondHalf.classList.toggle("hidden");
  }
document.getElementById("toggle-button").onclick = toggleSongs;