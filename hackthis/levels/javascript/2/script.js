var length = 5;
var x = 3;
var y = 2;

// y is -0.9491487220002653
y = Math.sin(118.13); 

// y is 0.9491487220002653
y = -y;

// The Math.ceil() function returns the smallest integer greater than or equal to a given number.
// x is 1
x = Math.ceil(y);

// y is 1.9491487220002655
y++;

// y is 3.9491487220002655
y = y + x + x;

// y is 7.797887814238165
y *= (y/2);

// y is 9.797887814238166
y++;
y++;

// length is 9
length = Math.floor(y);

console.log(length);
