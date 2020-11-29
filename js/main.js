
var totalCount = 6;

function preLoad() {
    for (var num = 0; num <= totalCount; num++) {
        img = new Image();
        img.src = "img/background-" + num + ".jpg";
    }
}

function changeImage() {
    var num = Math.ceil( Math.random() * totalCount );
    document.documentElement.style.backgroundImage = 'url(img/background-'+num+'.jpg)';
}

preLoad();

setInterval(changeImage, 5000);
