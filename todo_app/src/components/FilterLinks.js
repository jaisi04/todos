import React from 'react';
import Constants from '../constants'

const ALL = Constants.ALL;
const ACTIVE = Constants.ACTIVE;
const COMPLETED = Constants.COMPLETED;

let Link = function(props){
    let filterValue = props.filterValue;
    let currentFilter = props.currentFilter;
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
            onClick = {function(event){
                props.onFilterChange(event, filterValue);
            }}
            >
            <strong>
                {props.children}
            </strong>
        </a>
    );
}

let FilterLinks = function(props){
    return (
        <div>
            <span>{'Display: '}</span>
            <Link currentFilter = {props.currentFilter} filterValue = {ALL} onFilterChange = {props.onFilterChange}>{ALL}</Link>
            <Link currentFilter = {props.currentFilter} filterValue = {ACTIVE} onFilterChange = {props.onFilterChange}>{ACTIVE}</Link>
            <Link currentFilter = {props.currentFilter} filterValue = {COMPLETED} onFilterChange = {props.onFilterChange}>{COMPLETED}</Link>
        </div>
    );
}

export default FilterLinks;