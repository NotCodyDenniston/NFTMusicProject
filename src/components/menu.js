import React from "react";


function Menu (props) {

   
    
    return(
    <div className="menu">
        <a href="" className="menu-button"><h3>All</h3></a>
        <h3 className="menu-button" onClick={props.onClickHandler}>Rock</h3>
        <h3 className="menu-button" onClick={props.onClickHandler}>Rap</h3>
        <h3 className="menu-button" onClick={props.onClickHandler}>indie</h3>
    </div>
    )
}

export default Menu