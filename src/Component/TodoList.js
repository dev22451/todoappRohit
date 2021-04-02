const TodoList = (props) => {
    const {todoList} = props;
    return (
        <div>
            {
                todoList.map((list,index) => {
                    const {name} = list
                    return(
                        <div className="todolist">
                            {name}
                        </div>
                )
            })

        } 
        </div>
    );
}
export default TodoList