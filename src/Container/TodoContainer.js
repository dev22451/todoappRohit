import React, { Component } from 'react';
import AddTodoInput from '../Component/';

class TodoContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <AddTodoInput/>
        )
    }
}
export default TodoContainer