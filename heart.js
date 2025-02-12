function openModal() {
    let modal = document.getElementById("questionModal");
    let video = document.getElementById("loveVideo");

    if (modal && video) {
        modal.style.display = "flex";
        video.play();
    } else {
        console.error("Modal hoặc video không tồn tại!");
    }
}

function closeModal() {
    let modal = document.getElementById("questionModal");
    let video = document.getElementById("loveVideo");

    if (modal && video) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    }
    let modal2 = document.getElementById("EDModal");
    modal2.style.display = "flex";
}

function Finish(){
    window.location.href = "https://www.facebook.com/khoa.le.tran21";
}

window.onclick = function(event) {
    let modal = document.getElementById("questionModal");
    if (event.target === modal) {
        closeModal();
    }
};
