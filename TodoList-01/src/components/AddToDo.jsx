/* eslint-disable react/prop-types */
import { MdOutlineAddTask } from "react-icons/md";

function AddToDo({handletodoName,handletodoDate,handleAddTodoBtn,todoName,todoDate}) {
  return (
    <div className="row ed-row">
      <div className="col-6">
        <input type="text" placeholder="Enter your task" value={todoName}
        onChange={handletodoName}
        />
      </div>
      <div className="col-4 ed-enp">
        <input type="date" name="date" id="date" value={todoDate}
        onChange={handletodoDate}
        />
      </div>
      <div className="col-2 ">
        <button type="button" className="btn ed-btn btn-outline-success"
        onClick={handleAddTodoBtn}
        >
          <MdOutlineAddTask />
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
