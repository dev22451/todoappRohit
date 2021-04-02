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
        this.handleCheck=this.handleCheck.bind(this);
        // this.handleClickInput=this.handleClickInput.bind(this);
    
    }
    handleAddTodo(){
        const{todoList,todoName}=this.state;
        let refTodoList = todoList;
        refTodoList.push({
            name:todoName,
            isCompleted:false
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

        handleCheck(index){
        let refList = this.state.todoList;
        refList[index].isCompleted=true
        this.setState({
            todoList:refList
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
            <TodoList todoList={todoList} handleCheck={this.handleCheck} handleClickInput={this.handleClickInput}/>
            </div>
        )
    }
}
export default TodoContainer