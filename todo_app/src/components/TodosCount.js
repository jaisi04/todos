import React from 'react';
const MARGIN = {marginTop: "1%"}
const TodosCount = ({todosCount, currentFilter}) => {
    return(
        <div className=" card card-body bg-light" style ={MARGIN}>
            <h5>{currentFilter} todos: {todosCount}</h5>
        </div>
    );
}

export default TodosCount;