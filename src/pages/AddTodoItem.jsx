import { useState } from "react";
import TodoItems from "../components/TodoItems";
import WelcomeMessage from "../components/WelcomeMessage";
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";
import { BiCommentAdd } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./AddTodoItem.css";

const AddTodoItem = ({
  onNewTodo,
  todoItems = [],
  onDeleteClick,
  onEditClick,
  onCompleteClick,
  showNotFoundMessage,
  showWelcomeMessage,
}) => {
  const [todoName, setTodoName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  //METHODS TO HANDLE ALL THE FUNCTIONALITY OF APP LIKE FORM SUBMISSION EDITING, SAVING AND CANCEL LOGIC OF TODO APP
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoName.trim()) {
      onNewTodo(todoName);
      setTodoName("");
      toast.success("Todo added successfully!");
    }
  };

  const handleEditClick = (id, name) => {
    setEditingId(id);
    setEditedName(name);
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedName.trim()) {
      onEditClick(editingId, editedName);
      setIsEditing(false);
      setEditingId(null);
      setEditedName("");
      toast.success("Todo updated successfully!");
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditingId(null);
    setEditedName("");
  };

  return (
    <center className="container mt-5 mb-5">
      <div className="card" style={{ backgroundColor: "#3d7794" }}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <h2 className="todo-heading">Enter New Task</h2>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 col-md-9 mb-2 mb-md-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your task here..."
                  value={todoName}
                  onChange={handleNameChange}
                />
              </div>
              <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end">
                <button
                  type="submit"
                  className="btn w-sm-auto addButton"
                  style={{ backgroundColor: "#4eaabf", color: "white" }}
                >
                  <BiCommentAdd />
                </button>
              </div>
            </div>
          </form>
          {/* HERE THE LOGIC OF IS MANAGED WHEN NO TODO ITEM IS PRESENT AND WHEN WE SEARCH WRONG ITEM IN HEADER SEARCH */}
          {isEditing ? (
            <div className="mt-3">
              <h4 className="edit-todo">Edit Todo</h4>
              <div className="d-flex flex-column flex-md-row">
                <input
                  type="text"
                  className="form-control me-0 me-md-2 mb-2 mb-md-0"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <button
                  className="btn btn-success me-0 me-md-2 mb-2 mb-md-0"
                  onClick={handleSaveClick}
                >
                  <MdOutlineSaveAlt />
                </button>
                <button className="btn btn-danger" onClick={handleCancelClick}>
                  <MdCancelPresentation />
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-3">
              {showNotFoundMessage ? (
                <div className="alert alert-info text-center">Not Found</div>
              ) : showWelcomeMessage ? (
                <WelcomeMessage />
              ) : (
                <TodoItems
                  todoItems={todoItems}
                  onDeleteClick={onDeleteClick}
                  onEditClick={handleEditClick}
                  onCompleteClick={onCompleteClick}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </center>
  );
};

export default AddTodoItem;
