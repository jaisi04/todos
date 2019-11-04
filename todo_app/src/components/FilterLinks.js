import React from 'react';
import {ALL, ACTIVE, COMPLETED} from '../constants'

const Link = ({filterValue, currentFilter, onFilterChange, children}) => {

    let linkStyle = {margin : "0% 1% 1% 1%"};
    if(filterValue === currentFilter){
        linkStyle = {
            margin : "0% 1% 1% 1%",
            backgroundColor: "#e6e6e6",
            lineHeight : "1.5",
            borderColor: "#adadad"
        }
    }
    return (
        <a 
            href = "#" 
            className = "btn btn-sm" 
            style = {linkStyle}
            onClick = {(event) => {
                onFilterChange(event, filterValue);
            }}
            >
            <strong>
                {children}
            </strong>
        </a>
    );
}

const FilterLinks =  props =>{
    return(
        <div>
            <span>{'Display: '}</span>
            <Link {...props} filterValue = {ALL}>{ALL}</Link>
            <Link {...props} filterValue = {ACTIVE}>{ACTIVE}</Link>
            <Link {...props} filterValue = {COMPLETED}>{COMPLETED}</Link>
        </div>
    );
}

export default FilterLinks;