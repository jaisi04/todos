import React from 'react';

class TodoForm extends React.Component{

    // //inside constructor don't remove these comments
    // //bind is better as per performance measures
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleChangeTodoText = this.handleChangeTodoText.bind(this);
    // //correct way for ref methods instead using arrow function 
    // this.handleInputRef = this.handleInputRef.bind(this);
    
    //the below code(arrow functions) is good only if the component has only one instance (viz. TodoForm, Todo)

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onNewTodoItem();
    }

    handleInputRef(inputRef){
        inputRef.focus();
    }

    handleChangeTodoText = (event) =>{
        const todoText = event.target.value;
        this.props.onTodoSearch(todoText);
    }

    render(){
        const {
            props :{todoText},
            handleFormSubmit,
            handleInputRef,
            handleChangeTodoText
        }  = this;
        return (
            <form className="form-group" onSubmit = {handleFormSubmit}>
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Add/Search Todo" 
                    ref={handleInputRef}
                    value = {todoText}
                    onChange = {handleChangeTodoText}
                />
            </form>
        );
    }
}

export default TodoForm;