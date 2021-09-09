/* Cursor Tracking */
const cursor = document.getElementById("cursor");
window.addEventListener('mousemove', ({ clientX, clientY }) => {
    cursor.style.top = clientY + 'px';
    cursor.style.left = clientX + 'px'
});

/* Event Handling To Trigger Style Changes */
const icon = document.getElementById("cursor-icon");
const buttonList = document.querySelectorAll("button");
buttonList.forEach((b) => {
    b.addEventListener('mouseenter', () => {
        icon.id = "cursor-icon--hovering"
    });
    b.addEventListener("mouseleave", () => {
        icon.id = "cursor-icon";
    });
});