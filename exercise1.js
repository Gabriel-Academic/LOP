//Calculate the square root of the 2 degree equation
a = 1 //Put value A here
b = 8 //Put value B here
c = -9 //Put value C here
delta = b * b - 4 * a * c;
x1 = (-b + Math.sqrt(delta)) / (2 * a)
x2 = (-b - Math.sqrt(delta)) / (2 * a)
console.log(x1+" "+x2)