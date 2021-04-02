const AddTodoInput = (props) => {
const {handleAddTodo,handleOnTodoName,todoName}=props;
    return (
        <div className="TodoInput">
            <input type="text"
            min="5"
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