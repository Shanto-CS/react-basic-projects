/* eslint-disable react/prop-types */
import { MdOutlineDeleteForever } from "react-icons/md";
function ToDo({todoname,tododate,handleDelete}) {
  return (
    <div className="row ed-row">
      <div className="col-6">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <button type="button" className="btn ed-btn btn-outline-danger" 
          onClick={() => handleDelete(todoname)}
        >
          <MdOutlineDeleteForever/>
        </button>
      </div>
    </div>
  );
}
export default ToDo;
