window.onload = function() {
    var canvas;
    var ctx;
    var delay = 100;
    var xCoord = 0;
    var yCoord = 0;

    init();

    function init() {
        canvas = document.createElement('canvas');
        canvas.widht = 900;
        canvas.height = 300;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');

    }

    function refreshCanvas() {
        xCoord += 2;
        yCoord += 2;
        ctx.clearRect(0.0, canvas.widht, canvas.height);
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(xCoord, yCoord, 100, 50);
        setTimeout(refreshCanvas, delay);


    }

}