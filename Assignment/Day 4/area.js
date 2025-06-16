const a = 5;
const b = 6;
const c = 7;

// Calculate semi-perimeter
const s = (a + b + c) / 2;

// Calculate area 
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("Area of the triangle is: " + area);
