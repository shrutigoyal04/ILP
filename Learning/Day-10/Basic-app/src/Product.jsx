import "./Product.css"
import Price from "./Price.jsx";
// function Product({title,price=10,features,features2})
// function Product({title,price=10}){
    // console.log(props.title);
    // console.log(features);
    // console.log(features2.a);

    // const list = features.map((feature) => <li>{feature}</li>);

    // if(price>10000){
    //    return(
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <h3>Price :{price}</h3>
    //             <p>Discount of 5%</p>
    //         </div>
    //     );
    // }else{
    //     return(
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <h3>Price :{price}</h3>
    //         </div>
    //     );
    // }

// return(
//     <div className="Product">
//     <h3>{title}</h3>
//     <h3>Price :{price}</h3>
//     {price>10000 ? <p>"Discount of 5%"</p>: null}
//     {price>10000 && <p>"Discount of 5%"</p>}
//     {/* <p>{features}</p> */}
//     {/* <p>{list}</p> */}
//     {/* <p> {features.map((feature) => <li>{feature}</li>)}</p> */}
//     {/* <p>{features2}</p> */}
//     </div>
// );


////Dynamic component Styling
// let styles= {backgroundColor: price >10000 ? "lightblue":""};


// return(
//     <div className="Product" style={styles}> 
//     <h3>{title}</h3>
//     <h3>Price :{price}</h3>
//     {price>10000 ? <p>"Discount of 5%"</p>: null}
//     </div>
// );
// }
// }
/////amazon webpage

function Product({title,idx}){
    let oldPrices = ["12,999","22,340","40,000","12,000"];
    let newPrices = ["10,000","20,000","35,000","10,000"];
    let description = [["Logitech Mouse","Programmable"], ["Apple Pencil Better Surface","Good Control"], ["Zebronics Headphones","Best Product"], ["Petronics Pet Tracker","Programmable"]];
return(
    <div className="Product" > 
   <h4>{title}</h4>
   <p>{description[idx][0]}</p>
   <p>{description[idx][1]}</p>
   <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
);

}



export default Product;