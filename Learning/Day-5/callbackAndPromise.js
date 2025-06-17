// function hello(){
//     console.log("hello")
// }

// function demo(){
//    hello()
// }

// demo()

// setTimeout(()=>{
//     console.log("Shruti")   
// },2000)   
// console.log("hello")

// h1 = document.querySelector("h1")
// ///callback nesting -> callback hell
// changeColor("red",1000 ,()=>{
//     changeColor("yellow",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("orange",1000)
//         })
//    })
// })

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color =color
//         if(nextColorChange)
//         nextColorChange()
//     },delay)
// }

//////////promises//////////////////
// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }
////callback hell//////////
// saveToDb(
//   "shruti",
//   () => {
//     console.log("Success:Your data was saved");
//     saveToDb(
//       "hello World",
//       () => {
//         console.log("sucess 2:data2 saved");
//       },
//       () => {
//         console.log("failue 2:data2 not saved");
//       }
//     );
//   },
//   () => {
//     console.log("Failure:weak connection,data not saved");
//   }
// );


///////////promise//////////
// function saveToDb(data) {
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//           resolve("success:saved");   
//         } else {
//           reject("failure:not saved");
//         }
//     })
   
//   }

// let request = saveToDb("shruti")  
// request.then(()=>{
//     console.log("promise was resolved")
//     console.log(request)
// })
// .catch(()=>{
//     console.log("promise was rejected")
//     console.log(request)
// })

////more compact form///////////

// saveToDb("shruti")
// .then(()=>{
//     console.log("promise was resolved")
// })
// .catch(()=>{
//     console.log("promise was rejected")
// })



///////////promise chaining///////////

// function saveToDb(data) {
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//           resolve("success:saved");   
//         } else {
//           reject("failure:not saved");
//         }
//     })
   
// }

// saveToDb("shruti")
// .then((result)=>{
//     console.log("Data 1 saved")
//     console.log("result of promise:",result)
//     return saveToDb("Hello world")
// })
// .then((result)=>{
//     console.log("Data 2 saved")
//     console.log("result of promise:",result)
//     return saveToDb("jyoti")
// })
// .then((result)=>{
//     console.log("Data 3 saved")
//     console.log("result of promise:",result)
// })
// .catch((error)=>{
    // console.log("promise was rejected")
    // console.log("error of promise:",error)
// })




// h1 = document.querySelector("h1")

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color =color  
//             resolve("color changed") 
//         },delay)
//     })
   
    
// }
// changeColor("red",1000)
// .then((result)=>{
//     console.log("red color completed")
//     console.log("result of promise:",result)
//     return changeColor("green",1000)
// })
// .then((result)=>{
//     console.log("green color completed")
//     console.log("result of promise:",result)
//     return changeColor("blue",1000)
// })
// .then((result)=>{
//     console.log("blue color completed")
//     console.log("result of promise:",result)
//     return changeColor("orange",1000)
// })
// .then((result)=>{
//     console.log("orange color completed")
//     console.log("result of promise:",result)
// })


