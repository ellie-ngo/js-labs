// 1. Write a function to calculate the area of the rectangle
// 2. Write a function to calculate the perimeter of the rectangle

function calculateAreaOfRectangle(l, w) {
    if (l <= 0 || w <= 0) return -1

    return l*w;
}

function calculatePerimeterOfRectangle(l, w) {
    if (l <= 0 || w <= 0) return -1

    return 2*(l+w);
}

console.log(calculateAreaOfRectangle(3, 5));
console.log(calculatePerimeterOfRectangle(3, 5));

// 3. Write a function  to calculate the area of a circle

function calculateAreaOfCircle(r) {
    if (r <= 0) return -1;

    return Math.PI*r**2;
}

console.log(calculateAreaOfCircle(10));