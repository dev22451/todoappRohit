const TodoList = (props) => {
    const {todoList , handleCheck,handleOnRemove} = props;
    return (
        <div>
            {
                todoList.map((list,index) => {
                    const {name , isCompleted} = list
                    return(
                        <div className="todolist">
                            <input type="checkbox" checked={isCompleted} onChange={()=>{handleCheck(index)}}/>
                            {name}
                            {isCompleted===true && <span float-right> Completed</span>}
                            <button onClick={()=>{handleOnRemove(index)}}>X</button>
                        </div>
                )
            })

        } 
        </div>
    );
}
export default TodoList