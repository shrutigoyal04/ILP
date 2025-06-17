//async function,return promise 
// normal condition-> fulfilled
// error-> rejected

// async function greet(){
//     throw "some random error"
    // return "hello"
// }
// greet()
// .then((result)=>{
//     console.log("promise was successful:", result)
// })
// .catch((error)=>{
//     console.log("promise was rejected")
//     console.log(error)
// })


// let demo = async ()=>{ 
//     return 5;
// }
// console.log(demo())


////////////await////////////

//  function getNum(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1
//             console.log(num)
//             resolve()
//         },1000) 
//     })
//  }

//  async function demo(){
//    await getNum()
//    await getNum()
//    await getNum()
//    await getNum()
//     getNum()
//  }
// demo()



// h1 = document.querySelector("h1")

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*5)+1
//             if(num>3){
//                 reject("promise rejected")
//             }
//             h1.style.color =color  
//             console.log(`color changed to ${color}`)
//             resolve("color changed") 
//         },delay)
//     })
// }

// async function demo() {
//     try{
//         await changeColor("red",1000) 
//         await changeColor("green",1000) 
//         await changeColor("blue",1000) 
//         await changeColor("orange",1000) 
//         await changeColor("purple",1000)
//     } catch(err){
//         console.log("error caught")
//         console.log(err)
//     }

//     let a=5;
//     console.log(a)
//     console.log("new number=",a+3)
    
// }

// demo()

///////json///////
// json-> javascript object notation


// let jsonRes = '{"fact":"Cats come back to full alertness from the sleep state faster than any other creature.","length":85}'
// console.log(jsonRes)
// // parse,string data ko js object me convert krta h 
// let validRes = JSON.parse(jsonRes)
// console.log(validRes)
// console.log(validRes.fact)
// console.log(validRes.length)

//stringify, js object ko json me convert krta h
// let student={
//   name:"shruti",
//   marks:95
// }
// console.log(student)
// let jsonRes = JSON.stringify(student)
// console.log(jsonRes)


