import React from "react";


function Menu (props) {

   
    
    return(
    <div className="menu">
        <h3 onClick={props.onClickHandler}>Rock</h3>
        <h3 onClick={props.onClickHandler}>Rap</h3>
        <h3 onClick={props.onClickHandler}>indie</h3>
    </div>
    )
}

export default Menu