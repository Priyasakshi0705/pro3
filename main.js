var mouseEvent = "empty";

console.log(mouseEvent);
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "orange";
width_of_line = 5;
document.getElementById("colourInput").value = color;
 document.getElementById("widthInput").value = width_of_line;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    //Addictonal Activity start
     color = document.getElementById("colourInput").value;
    width_of_line = document.getElementById("widthInput").value;
    //Addictonal Activity ends

    mouseEvent = "mousedown";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;


    if (mouseEvent == "mousedown") {

        console.log("mousedown + mousemove");
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        
        ctx.stroke();

    }

    
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


if (width_of_screen < 992) {
    document.getElementById("myCanvas").width = new_width_canvas;
    document.getElementById("myCanvas").height = new_height_canvas;
    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

    console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    // old same old as the paint web app
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;

    // end of old same old as the paint web app
}

var last_position_of_x, last_position_of_y;
color = "green";
width_of_line = 8;
document.getElementById("colourInput").value = color;
document.getElementById("widthInput").value = width_of_line;


canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var width_of_screen = screen.width;

new_width_canvas = screen.width - 100;
new_height_canvas = screen.height - 300;


if (width_of_screen < 992) {
    document.getElementById("myCanvas").width = new_width_canvas;
    document.getElementById("myCanvas").height = new_height_canvas;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    console.log("my_touchstart");
    //Additional Activity
    color = document.getElementById("colourInput").value;
    width_of_line = document.getElementById("widthInput").value;
    //End Additional Activity

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

    console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;

}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);}