canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_tag = new Image();
    background_tag.onload = upload_background;
    background_tag.src = background_image;

    rover_tag = new Image();
    rover_tag.onload = upload_rover;
    rover_tag.src = rover_image;

}

function upload_background() {
    ctx.drawImage(background_tag, 0, 0, canvas.width, canvas.height)
}

function upload_rover() {
    ctx.drawImage(rover_tag, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}