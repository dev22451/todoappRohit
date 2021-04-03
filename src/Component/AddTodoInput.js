const AddTodoInput = (props) => {
const {handleAddTodo,handleOnTodoName,todoName ,error}=props;
    return (<>
        <div className="TodoInput">
            <input type="text"
            value={todoName}
             placeholder="Enter Task" 
            onChange={handleOnTodoName}
            />
            <button 
            className="button"
            onClick={handleAddTodo}>Add 
            </button>
            <span>{error}</span>
        </div>
    </>
    )
}

export default AddTodoInput