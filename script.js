function sayYes() {
    document.getElementById("message").style.display = "block";
    document.getElementById("message").innerText = "Yay! ❤️";
    document.getElementById("videoContainer").style.display = "block";
    document.getElementById("loveVideo").play();
}

function moveNo() {
    let noButton = document.querySelector(".no");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}
