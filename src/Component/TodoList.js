const TodoList = (props) => {
    const {todoList , handleCheck,handleClickIndex} = props;
    return (
        <div>
            {
                todoList.map((list,index) => {
                    const {name , isCompleted} = list
                    return(
                        <div className="todolist">
                            <input type="checkbox" checked={isCompleted} onChange={()=>{handleCheck(index)}}/>
                            {name}
                            {isCompleted===true && <span className="badge badge-pill   float-left"> Completed</span>}
                            <button onClick={()=>{handleClickIndex(index)}}>X</button>
                        </div>
                )
            })

        } 
        </div>
    );
}
export default TodoList