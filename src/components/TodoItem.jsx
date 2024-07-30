import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FiDelete } from "react-icons/fi";
import { MdOutlineSaveAlt } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// TAKING DATA PASSED BY COMPONENT USING PROPS
const TodoItem = ({
  todoName,
  onDeleteClick,
  onEditClick,
  id,
  isEditing,
  isCompleted,
  onCompleteClick,
}) => {
  const [editedName, setEditedName] = useState(todoName);
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleSaveClick = () => {
    if (editedName.trim()) {
      onEditClick(id, editedName);
    }
  };

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onCompleteClick(id, checked);
  };

  const handleDeleteClick = () => {
    if (isChecked) {
      // WILL ALLOW DELETE WHEN CHECKBOX IS CHECKED

      onDeleteClick(todoName);

      //USED TOASTIFY HERE
      toast.error("Todo deleted successfully!");
    } else {
      toast.warn("Please complete the todo before deleting.");
    }
  };

  return (
    <div className="container mb-3">
      <div className="row align-items-center">
        <div className="col-12 col-md-7 mb-2 mb-md-0">
          {isEditing ? (
            <div className="d-flex flex-column flex-md-row">
              <input
                type="text"
                className="form-control me-2 mb-2 mb-md-0"
                value={editedName}
                onChange={handleNameChange}
              />
              <button
                className="btn btn-success me-2 mb-2 mb-md-0"
                onClick={handleSaveClick}
              >
                <MdOutlineSaveAlt />
              </button>
            </div>
          ) : (
            <div
              className={`p-2 border rounded ${
                isChecked ? "bg-light text-decoration-line-through" : "bg-light"
              }`}
            >
              {todoName}
            </div>
          )}
        </div>
        {!isEditing && (
          <>
            <div className="col-12 col-md-3 d-flex align-items-center mb-2 mb-md-0">
              <input
                type="checkbox"
                className="form-check-input me-2"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label complete-status">
                Completed
              </label>
            </div>
            <div className="col-12 col-md-2 d-flex justify-content-center justify-content-md-end">
              {/* BUTTON TO EDIT TODO ITEM */}
              <button
                type="button"
                className="btn me-2 mb-2 mb-md-0 edit-button"
                style={{ backgroundColor: "#3a6378", color: "white" }}
                onClick={() => onEditClick(id, todoName)}
              >
                <CiEdit />
              </button>

              {/* BUTTON TO DELETE TODO ITEM */}
              <button
                type="button"
                className="btn btn-danger mb-2 mb-md-0"
                onClick={handleDeleteClick}
              >
                <FiDelete />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
