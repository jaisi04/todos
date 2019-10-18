import React from 'react';

class TodoForm extends React.Component{

    constructor(props){
        super(props);
        this.inputRef = null;
        this.handleInputRef = this.handleInputRef.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event){
        event.preventDefault();
        this.props.onNewTodoItem(this.inputRef.value);
        this.inputRef.value = "";
    }

    handleInputRef(inputRef){
        this.inputRef = inputRef;
    }

    render(){
        return (
            <form className="form-group" onSubmit = {this.handleFormSubmit}>
                <input className="form-control" type="text" placeholder="Add Todo" ref={this.handleInputRef}/>
            </form>
        );
    }
}

export default TodoForm;