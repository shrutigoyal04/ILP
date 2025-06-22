import {useState} from 'react';

export default function LikeButton() {

   let[liked, setLiked] = useState(false);

    let toggleLike = ()=>{
        setLiked(!liked);
        console.log("Liked:", liked);
    }

    let likeStyle={color: liked? "red": "white"};

    return(
        <div>
        <p onClick={toggleLike} style={likeStyle}>
    
        {liked? <i className="fa-solid fa-heart"></i>: <i className="fa-regular fa-heart"></i>}
      
        </p>
        </div>

    );
}