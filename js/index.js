function table(ctx, w, h, elements){

    ctx.fillStyle = "rgb(187, 23, 45)";
    
    // Quantity elements
    var cantX = elements;
    var cantY = (h * cantX) / w;

    // Incremental position
    var initx = w / cantX;
    var inity = h / cantY;

    // Elements distance
    var dist = w / h;

    // Initial position
    var x = dist;
    var y = dist;

    // Elements Size
    var width = initx - dist;
    var height = inity - dist;

    /*var allPos = {[
        'n': 0,
        'pos': [0,0]
    ]};*/

    for (var i = 0; i < cantY; i++){
        for (var j = 0; j < cantX; j++){

            ctx.fillRect (x, y, width, height);
            x = x + initx;
        }
        y = y + inity;
        x = dist;
    }
}


function start() {

    window.onscroll = function () { window.scrollTo(0, 0); };

    var canvas = document.getElementById("canvas");

    if (canvas.getContext) {

        var ctx = canvas.getContext("2d");

        // Total screen size
        //var w = window.screen.availWidth, h = window.screen.availHeight;
        // Actual screen size
        var w = window.innerWidth, h = window.innerHeight;

        canvas.width = w;
        canvas.height = h;

        table(ctx, w, h, 80);
    }
}
