var btu1 = document.getElementById("large");
var btu2 = document.getElementById("small");
var canvas = document.getElementById("clock").getContext("2d");
var width = canvas.canvas.width;
var height = canvas.canvas.height;
var r = width / 2;
var rem = width / 200;

btu1.addEventListener("click", function(e) {
    var cswidth = document.getElementById("clock");
    var csheight = document.getElementById("clock").height;
    canvas.clearRect(0, 0, width, height);
    cswidth =  cswidth + 50;
    csheight = csheight + 50;
    draw();
    console.log(canvas.canvas.width + " " + canvas.canvas.height + " " +r);
});
btu2.addEventListener("click", function() {
    var dom = document.getElementById("clock");
    var canvas = document.getElementById("clock").getContext("2d");
    canvas.clearRect(0, 0, dom.width, dom.height)
    dom.width =  dom.width - 50;
    dom.height = dom.height - 50;
});