import { useEffect, useState } from "react";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos, addTodo } from "../reducers/todos/actions";
import SelectedTodo from "./SelectedTodo";

function Todos() {
  const [selectedTodo, setSelecetdTodo] = useState({});
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  const handleClickCheck = (id) => {
    setSelecetdTodo({ id });
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: todos?.todos?.length + 1,
        title,
        completed: false,
        userId: 1,
      })
    );
    setTitle("");
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", textAlign: "center" }}>
      <div>
        <h1>Add Todo</h1>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter Todo Title"
          onChange={handleTitleChange}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <hr />
        <h1> All Todos</h1>
        {todos?.loading ? (
          <p>Loading....</p>
        ) : (
          todos?.todos?.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              handleClickCheck={handleClickCheck}
              selectedTodo={selectedTodo}
            />
          ))
        )}
      </div>
      {Object.keys(selectedTodo).length !== 0 && (
        <SelectedTodo todo={selectedTodo.id} />
      )}
    </div>
  );
}

export default Todos;
