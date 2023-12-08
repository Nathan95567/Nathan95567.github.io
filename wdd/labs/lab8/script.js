function toggleTheme() {
    var songsSecondHalf = document.body;
    songsSecondHalf.classList.toggle("dark-mode");
  }
document.getElementById("toggleButton").onclick = toggleTheme;