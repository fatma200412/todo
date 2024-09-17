import React, { useState } from "react";

function ToDoBox() {
  let [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  console.log(value);
  console.log(todos);

  function getValue(e) {
    setValue(e.target.value);
  }
  function addTodo() {
    setTodos([...todos, value]);

    setValue("");
  }

  return (
    <div>
      <h1>To do</h1>
      <input type="text" onChange={getValue} value={value} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos &&
          todos.map((elem, i) => {
            return (
              <li key={i}>
                {elem}{" "}
                <button
                  onClick={() => {
                    let arr = [...todos];
                    arr.splice(i, 1);
                    setTodos(arr);
                  }}
                >
                  delete
                </button>{" "}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ToDoBox;
