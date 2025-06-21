// node.js is a javascript runtime environment that allows you to run JavaScript code on the server side. 
// node.js is not a language ,library or framework


// let n=5;
// for (let i = 0; i < n; i++) {
//     console.log("hello",i)   // to run this in terminal use [node script.js]
    
// }
// console.log("Bye")

/////process///////
// process is a global object in node.js that provides information about the current process.
// process
// process.version // to get the version of node.js
// process.cwd() // to get the current working directory
// process.release // to get the release version of node.js


//process.argv // to get the command line arguments passed to the script


// console.log(process.argv)      // used to print the path of node.js and executable file
// to run this we can write in terminal [node script.js] and it will print the path of node.js and executable file
// we can also pass arguments like [node script.js shru jyoti] and it will print the path of node.js and executable file along with the arguments passed


// let args = process.argv;           
// for (let i = 2; i < args.length; i++) {   
 //terminal pe[ node script.js shruti] aise run krenge to shruti  as a argument work krega
//     console.log("Bye to",args[i])
// }


//////module.exports//////
// module.exports is used to export a module so that it can be imported in another file

// require() --> it is a built in function to include external modules that exists in sepatate file
// module.exports --> it is a special object


// const math = require('./math') // this will import the value exported from math.js file
// console.log(math) 
// console.log(math.sum(2,3)) 
// console.log(math.mul(2,3)) 
// console.log(math.g)
// console.log(math.PI)


////npm -> node package manager 
///it is a library of packages and command line tool
//standard package manager for node.js 



//////installing packages////
// node_modules --> the node modules folder contains every installed dependency of your project
// package-lock.json --> it records the exact version of every installed dependency, including its sub-dependencies and their version
// package.json --> it contains descriptive and functional metadata about project such as name,version,dependencies
// to create this we use npm init and fill details


//////////import/////////////
// ya toh pure code me require hi krte h ya import hi krte h
// import krne k liye package.json me key value pair add krna pdta h 
// jo ki h ye --> "type": "module"
// import {sum,PI,mul} from "./math.js"
// console.log(sum(1,2));
// console.log(mul(1,-2));

//////express////
// a node.js web application framework that helps us to make a web application
// It is used for server side programming
// major uses-->1. listen for incoming request
            //  2. parse
            //  3. match response with routes
            //  4. send suitable response