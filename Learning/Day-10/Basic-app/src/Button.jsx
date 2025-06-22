function printHello(event){
    console.log("Hello!");
    console.log(event);
}

function printBye(){
    console.log("Bye!");
}

function doubleClick(){
    console.log("Double Clicked!");
}

export default function Button(){
    return(
        <div>
            <button onClick={printHello} >Click Me!!</button>
            <p onMouseOver={printBye}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, at. Quos cumque quisquam est, neque vero eius, alias sunt optio possimus ad voluptas, hic laborum. Nemo nisi impedit laborum dolorum?</p>
            <button onDoubleClick={doubleClick}>Click me</button>
        </div>
    );
}