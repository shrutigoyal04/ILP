// dom

// console.dir(document)
// console.dir(document.all)
// console.dir(document.all[8])       //h1 ko access kiya
// console.dir(document.all[8].innerText)    //innertext ko print kraya
// console.dir(document.all[8].innerText="Peter Parker")    //innertext change kr diya 
// console.dir(document.all[8].innerText="Sahil Sharma") //phrse innertext change kr diya


////select////
// getElementById/////

// console.dir(document.getElementById("mainImg"))
// let obj = document.getElementById("mainImg")
// console.dir(obj.src)
// console.dir(obj.tagName)
// console.dir(obj.id)


// getElementsByClassName
// returns element as a html collection or empty collection
// console.dir(document.getElementsByClassName("oldImg"))
// let smallImages =document.getElementsByClassName("oldImg")

// for (let i = 0; i < smallImages.length ; i++) {
//     console.dir(smallImages[i]);
//     console.dir(smallImages[i].src);
//     }


// getElementsByTagName
// console.dir(document.getElementsByTagName("p"))
// console.dir(document.getElementsByTagName("p")[1].innerText="abc")

///////////query selector//////
// console.dir(document.querySelector("h1"))
// console.dir(document.querySelector("#description"))
// console.dir(document.querySelector(".oldImg"))    //ye oblect dega, jo first object match hoga vo de dega
// console.dir(document.querySelector("div a"))

// console.dir(document.querySelectorAll("div a"))     //saare anchor tag aa jaenge

//////manipulation//////

// let para = document.querySelector("p")
// console.dir(para)
// console.dir(para.innerHTML)     //tags bi dikhaega 
// console.dir(para.innerText)     //saara visible text jo screen pe dikhta h 
// console.dir(para.textContent)   //pura content jo hidden bi hoga kyuki html file se uthata h 
// console.dir(para.innerText="I m hero")     
// console.dir(para.innerHTML=" I M <b>SHRUTI GOYAL</b>")   

// let heading = document.querySelector("h1")
// console.dir(heading.innerHTML=`<u>${heading.innerText}</u>`)


// let img = document.querySelector("img");
// console.dir(img.getAttribute("id"))
// console.dir(img.setAttribute("id","spiderman image"))
// console.dir(img.setAttribute("src","assets/creation_3.jpeg"))

/////////style/////////////
// let heading = document.querySelector("h1")
// console.dir(heading.style.color= "purple")
// console.dir(heading.style.backgroundColor= "green")

// let links = document.querySelectorAll(".box a")
// console.dir(links)
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color="purple"
    
// }

// for(let link of links) {
//     link.style.color="magenta"
// }
//jo css file me style hota h usko access nhi kr skte
// ye bss inline css deti h 

// let img = document.querySelector("img");
// console.dir(img.classList)
// console.dir(img.classList.add("bcd"))  //class add kr dega
// console.dir(img.classList)
// console.dir(img.classList.remove("bcd"))  //class hta dega 
// console.dir(img.classList)
// console.dir(img.classList.contains("bcd"))    //btaega class h ya nhi
// console.dir(img.classList.toggle("bcd")) //class hogi toh hta dega nhi hogi toh add kr dega
// console.dir(img.classList)
//set attribute use krne se sari class htt jaati h or bss ek vahi class bchti h isliye use nhi krte


///////////navigation////////////

// let h4 = document.querySelector("h4")
// console.dir(h4.parentElement)
// console.dir(h4.children)

// let box = document.querySelector(".box")
// console.dir(box.children)
// console.dir(box.childElementCount)

// let ul = document.querySelector("ul")
// console.log(ul.children)
// console.log(ul.children[0])
// console.log(ul.children[1])
// console.log(ul.children[2])
// console.log(ul.children[2].previousElementSibling)
// console.log(ul.children[1].previousElementSibling)
// console.log(ul.children[1].nextElementSibling)
// console.log(ul.children[1].nextElementSibling.style.color="green")


//////create any element/////////////

// let para =document.createElement("p")
// let body = document.querySelector("body") 
// para.innerText="Hi ,I am Shruti Goyal "
// body.appendChild(para)            // isse hum ek parent me append kr skte h 

// let box = document.querySelector(".box")
// let btn =document.createElement("button")
// btn.innerText="click me"
// box.appendChild(btn)

// para.append("and I am Sahil Sharma")  // isme kisi elemnt me hi add ho jaata h
// para.append(btn)

// //append last me insert krta h prepand starting me krta h 
// para.prepend(btn)

// let btn =document.createElement("button")
// btn.innerText="click me"
// let p = document.querySelector("p")
// p.insertAdjacentElement("beforebegin",btn)
// p.insertAdjacentElement("afterbegin",btn)
// p.insertAdjacentElement("beforeend",btn)
// p.insertAdjacentElement("afterend",btn)

// let body = document.querySelector("body")
// body.removeChild(btn)    //btn remove ho gya
// p.remove()  //p direct remove ho jaega 

let h3 = document.createElement("h3")
h3.innerText="I am blue h3"
document.querySelector("body").append(h3)
h3.style.color="blue"