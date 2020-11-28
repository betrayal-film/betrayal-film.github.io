window.onload = function() {
    if (screen.width < 450) {
        var mvp = document.getElementById('vp');
        mvp.setAttribute('content','user-scalable=no,width=750');
    }
}
