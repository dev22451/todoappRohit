const AddTodoInput = (props) => {
const {handleAddTodo,handleOnTodoName,todoName}=props;
    return (
        <div>
            <input type="text"
            value={todoName}
             placeholder="Enter Todo" 
            onChange={handleOnTodoName}
            />
            <button 
            className="button"
            onClick={handleAddTodo}>Add 
            </button>
        </div>
    )
}

export default AddTodoInput