// @type {HTMLCanvasElement} 
window.alert("Welcome to my game!!!                                                                         in this game the purpose is to train your aim by clicking the circles. You will keep track of your score in your head which is part of the game to hep train your memory skills and mind. Good luck and have fun!")
let canvas = document.getElementById("can");
let c = canvas.getContext("2d");
let score = 0;      //makes score a global variable




class Ball {                                            //creates the class Ball 
    x; y; r; col;                                       //Lines 12-19 declares the coordinates and size etc
    constructor(x, y, r, col, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.col = col;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
    draw() {                                            //draws the circle
        c.fillStyle = this.col;
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        c.fill();
    }
    update() {
        if (this.x < 0 || this.x > canvas.width) {
        }
        if (this.y < 0 || this.y > canvas.height) {
        }
    }
}

window.addEventListener("keydown", create);             // when key is pressed it creates the ball array and draws a ball
let balls = [];
let started = false;
let keypress = " "

let starttime = Date.now();

function create(e) {                                    //creates the ball with random position adn random colour
    let r = 13;  // random ball position 
    let x = Math.floor(Math.random() * 293 + 1)
    let y = Math.floor(Math.random() * 143 + 1)

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let col = `rgb(${red},${green},${blue})`;
    let xSpeed = Math.floor(Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1)  // shortcut if statement. "If math.random greater than 0.5 then -1, else 1"
    let ySpeed = Math.floor(Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1)
    for (let i = 1; i <= 10; i = i + 1)
        balls.push(new Ball(x, y, r, col, xSpeed, ySpeed));    // ball push adds things to the array
    console.log(e.key);                                        // logs the e.key       
    if (e.key == " ") {
        if (!started) {             // ! means not
            window.requestAnimationFrame(animate);
            started = true;
        }
    }
}

function animate() {                                            // the animation function
    c.clearRect(0, 0, canvas.width, canvas.height)
    elapsedtime = Date.now() - starttime
    console.log(keypress);
   
    if (elapsedtime >= 10) {
        starttime = 0;
    }
    for (let i = 0; i < balls.length; i = i + 1) {
        balls[i].draw();                                        // this calls the function draw
        balls[i].update();
    }
    window.requestAnimationFrame(animate);
}

// Lines 120-122, I got from this site --> https://stackoverflow.com/questions/23744605/javascript-get-x-and-y-coordinates-on-mouse-click 

function printMousePos(event) {
    let mouseX = event.clientX;                                     // sets the mouse X position to "mouseX"
    let mouseY = event.clientY;                                     // sets the mouse Y position to "mouseY"
    let score = 0;
    let rd = 13 / 2;
    for (let i = 0; i < balls.length; i = i + 1) {
        let sentre = [mouseX + rd, mouseY + rd]
        let d = Math.sqrt((mouseX + rd) ** 2 + (mouseY + rd) ** 2);
        if (d >= rd) {
            balls.splice(0)
        }
        console.log(score);                                         // logs the score
        console.log(mouseX);                                        // logs the mouse X position
        console.log(mouseY);                                        // logs the mouse Y position
        console.log(d);                                             // logs the distance
        let r = 13;
        let x = Math.floor(Math.random() * 293 + 1)
        let y = Math.floor(Math.random() * 143 + 1)
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        let col = `rgb(${red},${green},${blue})`;
        let xSpeed = Math.floor(Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1)  // shortcut if statement. "If math.random greater than 0.5 then -1, else 1"
        let ySpeed = Math.floor(Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1)
        for (let i = 1; i <= 10; i = i + 1)
            balls.push(new Ball(x, y, r, col, xSpeed, ySpeed));    // ball push adds things to the array
    }
}

document.addEventListener("click", printMousePos);                  // when mouse cliked then it will start the function
document.addEventListener("click", function () {
    score++;
    disp.innerHTML = score;
});
