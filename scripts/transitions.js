// Starts header transitions on load
window.onload = function () {
    const div = document.querySelector(".welcome-div");
    div.classList.replace("faded-out", "faded-in");
    div.classList.replace("slide__start-from-right", "slide__end");
};