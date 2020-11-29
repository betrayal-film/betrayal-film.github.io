
var totalCount = 6;
var images = [];

function preLoad() {
    for (var num = 0; num <= totalCount; num++) {
        images[num] = new Image();
        images[num].src = "img/background-" + num + ".jpg";
    }
}

function changeImage() {
    var num = Math.ceil( Math.random() * totalCount );
    document.documentElement.style.backgroundImage = "url(" + images[num].src + ")";
}

preLoad();

setInterval(changeImage, 5000);
