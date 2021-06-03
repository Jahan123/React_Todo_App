import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleTodoComplete,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} from "../reducers/todos/actions";

function SelectedTodo({ todo }) {
  const [editTodo, setEditTodo] = useState(false);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const fetchTodo = useSelector((state) => state.todos.todo);
  const checkDeleted = useSelector((state) => state.todos.deleted);
  useEffect(() => {
    setTitle(fetchTodo.title);
  }, [fetchTodo?.title]);
  console.log(fetchTodo);
  useEffect(() => {
    dispatch(getSingleTodo(todo));
  }, [dispatch, todo]);

  const handleToggleClick = () => {
    dispatch(toggleTodoComplete(todo));
    dispatch(getSingleTodo(todo));
  };
  const handleEditTodo = () => {
    setEditTodo((prev) => !prev);
  };
  const handleOnChnage = (e) => {
    setTitle(e.target.value);
  };
  const handleUpdateTodo = () => {
    dispatch(updateTodo(todo, title));
    dispatch(getSingleTodo(todo));
    setEditTodo((prev) => !prev);
  };
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo));
  };
  return (
    <div>
      {checkDeleted ? (
        <div style={{ marginTop: "50px" }}>
          <h1>
            Todo Deleted SuccessFully, Select New Todo to Perform any Operation
          </h1>
        </div>
      ) : (
        <div>
          <h1>Selected Todo</h1>
          {editTodo ? (
            <div>
              {" "}
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleOnChnage}
              />
              <button onClick={handleUpdateTodo}>update Todo</button>{" "}
            </div>
          ) : (
            <p>title: {fetchTodo?.title}</p>
          )}
          <p>
            todo Status:{fetchTodo?.completed ? "Completed" : "Not Completed"}
          </p>
          <button onClick={handleEditTodo}>Edit Todo</button>
          <button onClick={handleDeleteTodo}>Delete Todo</button>
          <button onClick={handleToggleClick}>Toggle Status</button>
        </div>
      )}
    </div>
  );
}

export default SelectedTodo;
