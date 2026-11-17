const button = document.querySelector("#contrast-toggle");

button.addEventListener("click", function() {
    document.body.classList.toggle("high-contrast");

    if (document.body.classList.contains("high-contrast")) {
    button.textContent = "Normal View";
    }
    else {
        button.textContent = "High Contrast";
    }
});
