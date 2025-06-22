import Product from "./product.jsx";

function ProductTab() {
// let options = ["hi-tech","durable","stylish"];
// let options = [<li>"hi-tech"</li>,<li>"durable"</li>,<li>"stylish"</li>];
// let options2 = {a: "hi-tech", b: "durable", c: "stylish"};
    // return(
    //     <>
    //     {/* <Product title ="phone" price = {10000} features = {options} features2 = {options2} />
    //     <Product title ="laptop" price = {100000} features ={["hi-tech","durable","stylish"]} /> */}
    //     {/* <Product title ="pen" features = {{a: "hi-tech"}}/> */}


    //     <Product title ="phone" price = {10000}/>
    //     <Product title ="laptop" price = {100000} />
    //     <Product title ="pen"/> 
    //     </>
    // )


 ////amazon web page 
 

 let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
}
 return(
    <div style = {styles}>
    <Product title="Logitech" idx={0}/>
    <Product title= "Apple Pencil" idx={1}/>
    <Product title="Zebronics" idx={2}/>
    <Product title ="Petronics" idx={3}/>
    </div>
 );
}

export default ProductTab;