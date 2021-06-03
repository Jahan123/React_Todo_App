function Todo({
  todo: { completed, id, title },
  handleClickCheck,
  selectedTodo,
}) {
  return (
    <div
      style={{
        backgroundColor: selectedTodo.id === id ? "green" : "red",
        color: "white",
        padding: "10px",
        borderBottom: "2px solid lightgray",
        textDecoration: completed ? "line-through" : "",
        cursor: "pointer",
      }}
      onClick={() => handleClickCheck(id)}
    >
      {title}
    </div>
  );
}

export default Todo;
