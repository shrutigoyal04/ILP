import { useState } from 'react';

function init(){
    console.log("init function called")
    return Math.random()
}


export default function Counter (){
    // let count = 0;
    
    // function incCount() {
        //     count++;
        //     console.log("Count:", count);
        // }
        
        // let [stateVariable,setStateVariable] = useState(0);
        // let [count,setCount] = useState(0);
        let [count,setCount] = useState(init)

        let incCount = () => {
            // setCount(count + 1);

            /////callback in set state function
            setCount((prevCount) => {
                return prevCount + 1;
                })
             /////callback in set state function
            setCount((prevCount) => {
                return prevCount + 1;
                })
             /////callback in set state function
            setCount((prevCount) => {
                return prevCount + 1;
                })    
            console.log("Count:", count);
        }
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}