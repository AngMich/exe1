$(document).ready(function () {
    let colors = ["black", "blue", "green"];
    let index = 0;

    setInterval(function () {
        $("#hello-world").css("color", colors[index]);
        index = (index + 1) % colors.length; // Cycle colors
    }, 1000);
});
