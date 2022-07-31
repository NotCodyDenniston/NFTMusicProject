import React, {useState} from "react";


function Menu (props) {
const {sortingMethod, setSortingMethod} = props
    
    
    const handleOnChange = (e) => {
        console.log('HANDLEONCHANGE')
        setSortingMethod(e.target.value)
    }
    
    
    console.log(sortingMethod)
    
    return(
    <div className="menu">
        <a href="" className="menu-button"><h3>All</h3></a>
        <h3 className="menu-button" onClick={props.onClickHandler}>Rock</h3>
        <h3 className="menu-button" onClick={props.onClickHandler}>Rap</h3>
        <h3 className="menu-button" onClick={props.onClickHandler}>indie</h3>
        <form>
            <select className="select-form" onChange={handleOnChange} >
                <option value={'abc'} defaultValue>Select Filter!</option>
                <option value={'priceLowToHigh'}>Price Low to High</option>
                <option value={'priceHighToLow'}>Price High to Low</option>
                <option value={'dateLowToHigh'}>Date Low to High</option>
                <option value={'dateHighToLow'}>Date High to Low</option>
            </select>
        </form>
    </div>
    )
}

export default Menu