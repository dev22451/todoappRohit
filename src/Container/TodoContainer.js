import React     from 'react';
import { AddTodoInput,TodoList } from '../Component';

class TodoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoName:'',
            todoList:[],
           
        }

        this.handleOnTodoName = this.handleOnTodoName.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
       
    }
    handleAddTodo(){
        const{todoList,todoName}=this.state;
        let refTodoList = todoList;
        refTodoList.push({
            name:todoName,
        })
        this.setState({
            todoList:refTodoList,
            todoName:''
        })
    }

    handleOnTodoName(e){
        this.setState({
        todoName : e.target.value
        })
    }

    
     render(){
        const {todoList,todoName} = this.state;

        return(
            <div className="first">
            <AddTodoInput
                todoName = {todoName}
                handleAddTodo={this.handleAddTodo}
                handleOnTodoName={this.handleOnTodoName}
            />
            <TodoList todoList={todoList} />
            </div>
        )
    }
}
export default TodoContainer