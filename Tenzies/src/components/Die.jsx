import React from "react";

function Die(props){
    const style ={
        backgroundColor:props.isHeld?'#59E391':"white"
      }
    return(
        <div className="dies" style={style} onClick={props.holdDice}>
            <h2 >{props.value}</h2>
        </div>
    )
}

export default Die
