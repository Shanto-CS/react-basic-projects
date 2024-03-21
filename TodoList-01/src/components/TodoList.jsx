/* eslint-disable react/prop-types */
import ToDo from "./ToDo";

let TodoList = ({todoItem,handleDelete}) => {
  

  return (
    <>
      {todoItem.map((item) => (
        <ToDo key={item.name} todoname={item.name} tododate={item.date} handleDelete={handleDelete}/>
      ))}
    </>
  );
};

export default TodoList;
