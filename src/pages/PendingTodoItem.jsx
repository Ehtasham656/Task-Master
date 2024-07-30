import "./PendingTodoItem.css";
import { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const PendingTodoItem = () => {
  const [pendingTodos, setPendingTodos] = useState([]);

  //FETCHING THE DATA USING USEEFFECT HOOK

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();

        const pendingTasks = data.filter((todo) => !todo.completed).slice(0, 5);
        setPendingTodos(pendingTasks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  //MAPING THE CARD ON PENDING TODOITEMS
  return (
    <center className="container mt-5 pending-card">
      {pendingTodos.map((todo) => (
        <div key={todo.id} className="card text-center mb-4 card-color">
          <div className="card-header"> Status : Pending Task</div>
          <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
            <Link to={"/"} className="btn pending-button">
              <IoMdArrowRoundBack /> Go Back
            </Link>
          </div>
          <div className="card-footer text-body-secondary">
            Task ID: {todo.id}
          </div>
        </div>
      ))}
    </center>
  );
};

export default PendingTodoItem;
