import { AiFillDelete } from 'react-icons/ai';
const TodoList = (props) => {
    const {todoList , handleCheck,handleOnRemove} = props;
    return (
        <div>
            {
                todoList.map((list,index) => {
                    const {name , isCompleted} = list
                    return(
                        <div className="todolist">
                            <input type="checkbox" checked={isCompleted} onChange={()=>{handleCheck(index)}} className="checkbox"/>
                            {name}
                            {isCompleted===true && <span style={{float:"right"}}> Completed</span>}
                            <span style={{float:"right"}} onClick={()=>{handleOnRemove(index)}}><AiFillDelete/></span>
                        </div>
                )
            })

        } 
        </div>
    );
}
export default TodoList