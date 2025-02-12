document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const loveButton = buttons[0]; // Nút "Yes"
    const noButton = buttons[1]; // Nút "No"

    loveButton.addEventListener("click", function () {
        openModal();
    });

    noButton.addEventListener("click", function () {
        let currentFontSize = parseFloat(window.getComputedStyle(loveButton).fontSize);
        let currentWidth = parseFloat(window.getComputedStyle(loveButton).width);
        let currentHeight = parseFloat(window.getComputedStyle(loveButton).height);

        loveButton.style.fontSize = currentFontSize * 1.2 + "px";
        loveButton.style.width = currentWidth * 1.2 + "px";
        loveButton.style.height = currentHeight * 1.2 + "px";

        let NOcurrentFontSize = parseFloat(window.getComputedStyle(noButton).fontSize);
        let NOcurrentWidth = parseFloat(window.getComputedStyle(noButton).width);
        let NOcurrentHeight = parseFloat(window.getComputedStyle(noButton).height);

        noButton.style.fontSize = NOcurrentFontSize * 0.8 + "px";
        noButton.style.width = NOcurrentWidth * 0.8 + "px";
        noButton.style.height = NOcurrentHeight * 0.8 + "px";
    });
});


function openModal() {
    document.getElementById("questionModal").style.display = "flex";
}


function closeModal() {
    document.getElementById("questionModal").style.display = "none";
}


function submitAnswer() {
    let answer = document.getElementById("answerInput").value;
    if (answer.trim() !== "" && answer =="20062020") {
        window.location.href = "heart.html";
        closeModal();
    } else {
        alert("Em chưa nhập kìa! 😡");
    }
}
