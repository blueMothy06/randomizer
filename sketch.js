let occupation = ['young monarch who was thrown into the role too early','person pretending to be a cook','offical sword-holder','actor who plays the tree','very tired intern who is not getting paid for their efforts','Pixar lamp mascot'];
let action = ['ran away from your responsibilities','tried to fake their death ten years ago, but failed','piloted a T-Rex mecha','saved the world five times, despite trying to destroy it','organized protests to put actual bow ties on penguins','taught the queen how to do the Floss','tried to propose at a friend\'s wedding','managed to find the answer to life while trying to flee for their life'];
let place = ['back in my grandma\'s attic','in Shangri-la','in Narnia', 'in Camelot','in Hogwarts', 'in Gotham City','in Emerald City','in Neverland','on my roof ten days ago','in my dreams last night'];

let or;
let ar;
let pr;

let words;


function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(60);
  intText();
}

function draw() {
}

function mousePressed() {
  or = int(random(occupation.length));
  ar = int(random(action.length));
  pr = int(random(place.length));
  wrds = 'Hey, you\'re that ' + occupation[or] + ' and the same person who ' + action[ar] + ' ' + place[pr] + '!';
  fortText();
  console.log(wrds);
}

function intText() {
  fill(255);
  textAlign(CENTER);
  //this is a lie, you can click anywhere
  text('You look a bit familiar...', width*0.5, height*0.3);
}

function fortText() {
  background(0);
  intText();
  fill(255);
  textAlign(CENTER);

  text(wrds, width*0.5, height*0.75)
}