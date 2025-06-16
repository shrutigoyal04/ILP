// let arr = [1,2,3,4,5]
// let print = (el)=>{
//     console.log(el)
// }

// arr.forEach(print);

// arr.forEach((el) => {
//     console.log(el)
// });


// ///////map///////
// let num = [1,2,3,4,5,6]

// let double = num.map(el=>{
//     return el*2;
// }
// )
// console.log(double)


////////filter///////
// let num = [1,2,3,4,5,6]

// let even = num.filter(el=>{       //filter jo condition satisfy krega usi ka new array bnaega  
//     return el%2==0;
// }
// )
// console.log(even)


////////every//////////
//sbi true honge tbi true return krega
// console.log([2,4,6].every((el)=>el%2==0))  
// console.log([201,40,60].every((el)=>el%10==0))  

/////////reduce////////
// reduce the array to a single value , isme 2 variable honge (accumulator,elemrnt)
// console.log([2,4,6,8,1,3,5,7].reduce((res,el)=>(res+el))) 


// let arr = [1,2,30,4,5,6,7,8,9];
// let max = arr.reduce((max,el)=>{
//          if (el>max) {
//            return el;
//          }else{
//             return max;
//          }
// })
// console.log(max)

////////default parameter/////////
// function sum(a,b=2){
//     return a+b;
// }
// console.log(sum(2,3))
// console.log(sum(2))


////// spread/////////

// let arr = [1,2,3,4,5,67,-2]
// let minimum = Math.min(...arr)   // array k saare element individuallt aa jaate h
// console.log(minimum)            //(arr[0],arr[1],arr[2],....) like that
// console.log(...arr)            //(arr[0],arr[1],arr[2],....) like that
// console.log("Hey its me")
// console.log(..."Hey its me")

// let arr = [1,2,3,4,5,67,-2]
// let newArr = [...arr]
// console.log(arr)
// console.log(newArr)
// newArr.push(78)
// console.log(arr)
// console.log(newArr)

// let char = [..."hello"]
// console.log(char)

// let odd = [1,3,5,7]
// let even = [2,4,6,8]
// let num=[...odd,...even]
// console.log(num)
// num= [...even,...odd]
// console.log(num)

// let data = {
//     email: "shrutigoyal@gmail.com",
//     password: "shruti"
// };

// let datacopy = {...data , id:76}
// console.log(data)
// console.log(datacopy)

// let arr = [1,2,3,4,5] //value
// let str="shruti"
// let obj ={...arr}     //key:value
// console.log(obj)       //key become 0,1,2,3,4...
// let obj2 ={...str}     //key:value
// console.log(obj2)       //key become 0,1,2,3,4...
