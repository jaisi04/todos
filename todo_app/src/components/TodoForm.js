import React from 'react';

class TodoForm extends React.Component{

    constructor(props){
        super(props);
        this.handleInputRef = this.handleInputRef.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChangeTodoText = this.handleChangeTodoText.bind(this);
    }

    handleFormSubmit(event){
        event.preventDefault();
        this.props.onNewTodoItem();
    }

    handleInputRef(inputRef){
        inputRef.focus();
    }

    handleChangeTodoText(event){
        let todoText = event.target.value;
        this.props.onTodoSearch(todoText);
    }

    render(){
        return (
            <form className="form-group" onSubmit = {this.handleFormSubmit}>
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Add/Search Todo" 
                    ref={this.handleInputRef}
                    value = {this.props.todoText}
                    onChange = {this.handleChangeTodoText}
                />
            </form>
        );
    }
}

export default TodoForm;