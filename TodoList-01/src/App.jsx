import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import Welcome from "./components/EmptyMsg";
import { useState } from "react";
function App() {
  const todoItems = [
    {
      name: "Check Email",
      date: "30/11/2023",
    },
    {
      name: "Reply email",
      date: "30/11/2023",
    },
    {
      name: "brows net",
      date: "30/11/2023",
    },
  ];

  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  // >>>>>>>>>>>>for add Name of todo from input<<<<<<<<<<<<
  const handletodoName = (event) => {
    let newTodoName = event.target.value;
    setTodoName(newTodoName);
  };

  // >>>>>>>>>>>>for add Date of todo from input<<<<<<<<<<<<
  const handletodoDate = (event) => {
    let newTodoDate = event.target.value;
    setTodoDate(newTodoDate);
  };

  if (todoName !== "") {
    var handleAddTodoBtn = () => {
      handleNewTodo(todoName, todoDate);
      setTodoDate("");
      setTodoName("");
    };
  }

  // >>>>>>>>>>>>for set new to with todolist<<<<<<<<<<<<
  // >>>>>>>>>>>>for set Name and date of todo from input<<<<<<<<<<<<
  const [currentTodoItems, setTodoItem] = useState(todoItems);

  const handleNewTodo = (name, date) => {
    const newTodoItem = [...currentTodoItems, { name: name, date: date }];
    setTodoItem(newTodoItem);
  };

  // >>>>>>>>>>>>for delete a list from todolist<<<<<<<<<<<<
  const handleDelete = (todoName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoName);
    setTodoItem(newTodoItem);
  };

  return (
    <center>
      <AppName />

      <div className="container">
        <AddToDo
          handleAddTodoBtn={handleAddTodoBtn}
          handletodoName={handletodoName}
          handletodoDate={handletodoDate}
          todoName={todoName}
          todoDate={todoDate}
        />

        {currentTodoItems.length === 0 && <Welcome></Welcome>}
        <TodoList
          todoItem={currentTodoItems}
          handleDelete={handleDelete}
        ></TodoList>
      </div>
    </center>
  );
}

export default App;
