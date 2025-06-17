//setTimout

setTimeout(() => {
  console.log("Shruti");
}, 4000);
console.log("Hello");

//setInterval

let id = setInterval(() => {
  console.log("shruti"); //use clearInterval() to stop executing
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("clear interval run");
}, 10000);
