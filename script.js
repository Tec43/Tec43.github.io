let popup;

function openPopup() {
    popup = window.open("https://www.tec43.github.io", "_blank", "width=500,height=500");
}

function checkPopup() {
    if (!popup || popup.closed) {
        openPopup();
    }
}

setInterval(checkPopup, 1000);
